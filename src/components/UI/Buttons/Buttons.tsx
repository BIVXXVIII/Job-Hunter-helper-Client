import { MouseEventHandler } from "react"

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const ButtonRegular = ({ children, className, onClick }: ButtonProps) => {

    const buttonClasses = `px-8 py-1.5 bg-lime-200 rounded-2xl shadow-sm font-semibold block text-neutral-800 ${className ? className : ''}`;
    return (
        <button
            className={buttonClasses}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export const ButtonTech = ({ children, className, onClick }: ButtonProps) => {
    const buttonClasses = `bg-slate-500 text-white px-4 py-1 rounded-full ${className ? className : ''}`

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export const ButtonOptions = ({ children, className, onClick }: ButtonProps) => {
    const buttonClasses = `text-white bg-stone-400 w-6 h-6 flex justify-center items-center rounded-md [&>svg]:w-4 ${className ? className : ''}`

    return (
        <>
            <button className={buttonClasses}
                onClick={onClick}
            >{children}</button >
        </>
    )
}
