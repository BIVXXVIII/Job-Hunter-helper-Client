import { changeAllowStep, nextStep, prevStep, resetSteps } from '@/app/slices/createStatusSlice'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonTech } from '@/components/UI/Buttons/Buttons'
import { RootState } from '@/app/store'
import { stepsText } from '@/assets/text/PrepareStepsText'
import SetProblemDescription from './SetProblemDescription'
import { getStepAllowStatus } from '@/components/Hooks/getStepStatus'


type SetTheProblemLayaoutProps = {
    children: React.ReactNode,
}

export default function SetTheProblemLayaout({ children }: SetTheProblemLayaoutProps) {

    const currentStep = useSelector((state: RootState) => state.createStatus.currentStep)
    const finalStep = useSelector((state: RootState) => state.createStatus.finalStep)
    const stepIsAllowed = getStepAllowStatus()
    const dispatch = useDispatch()

    const complete = () => {
        dispatch(resetSteps())
    }

    const next = () => {
        if (!stepIsAllowed) return
        if (currentStep >= stepsText.length - 1) {
            complete()
            return
        }
        dispatch(nextStep())
        dispatch(changeAllowStep(false))
    }
    const prev = () => {
        dispatch(prevStep())
    }

    return (
        <div className='flex relative h-full scrollbar'>
            <div className='h-screen flex flex-grow'>
                <div className="flex-grow [&>*]:px-8 flex flex-col">
                    <div className='flex justify-between mb-4 pt-6 pb-4 bg-slate-500/30 '>
                        <ButtonTech
                            onClick={prev}
                        >
                            back
                        </ButtonTech>
                        <ButtonTech
                            onClick={next}
                            className={stepIsAllowed ? '' : 'opacity-20 cursor-default'}

                        >
                            {finalStep === currentStep ? "complete" : "next"}
                        </ButtonTech>
                    </div>
                    <div className='mb-4 overflow-y-auto scrollbar-gutter'>{children}</div>
                </div>
            </div>
            <SetProblemDescription />
        </div>
    )
}