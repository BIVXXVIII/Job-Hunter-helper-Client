import { RootState } from "@/app/store";
import { stepsText } from "@/assets/text/PrepareStepsText";
import { useSelector } from "react-redux";
type Props = {}

export default function SetProblemDescription({ }: Props) {
    const iterration = useSelector((state: RootState) => state.createStatus.currentStep)

    const titleClasses = `text-stone-700 font-bold text-3xl transition-all mb-4 duration-200`;
    const inactiveTitleClasses = `transition-all text-stone-700/50 duration-500 font-semibold`;
    const subtitleClasses = `text-sm text-stone-700/50 font-semibold`
    const textClasses = `text-stone-700/90 mb-10 transition-all duration-500`;
    const inactiveTextClasses = `opacity-0`;
    const inactiveStepClasses = `absolute duration-500 transition-opacity`;
    return (
        <div className="max-w-[30%] w-full border-l border-stone-500  [&>*]:px-10 pt-6 pb-8 flex flex-col justify-center bg-purple-100/50 overflow-hidden sticky top-0 h-screen">
            <div className="relative border-t border-b pt-2 bg-lime-100">
                {stepsText.map((step, index) =>
                    <div
                        className={
                            index !== iterration ?
                                inactiveStepClasses + (
                                    index < iterration ?
                                        (iterration - index <= 1 ? ' -translate-y-[45%]' : ' opacity-0 -translate-y-full')
                                        : (index - iterration > 1 ? ' opacity-0 translate-y-full' : ' translate-y-[20%]'))
                                : 'relative z-10'}
                        key={`step${index}`}
                    >
                        <span className='text-stone-400 text-sm font-bold'>{iterration < index ? 'next:' : (iterration > index ? 'previus:' : null)}</span>
                        <p className={subtitleClasses}>
                            step #{index + 1}
                        </p>
                        <h2 className={index === iterration ? titleClasses : inactiveTitleClasses}>
                            {step.title}
                        </h2>
                        <p className={index === iterration ? textClasses : inactiveTextClasses}>
                            {step.body}
                        </p>
                    </div>
                )}

            </div>
        </div >
    )
}