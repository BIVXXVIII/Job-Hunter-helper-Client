import { useRef } from "react";

type PopupProps = {
    closePopup: () => void,
    children: React.ReactNode
}

export function PopupDef({ closePopup, children }: PopupProps) {
    const bgRef = useRef(null)


    const backgroundClasses = 'fixed bg-slate-900/50 w-full h-full top-0 left-0 z-50 flex justify-center items-center';
    return (
        <div
            className={backgroundClasses}
            ref={bgRef}
            onClick={(event) => {
                if (event.target !== bgRef.current) return
                closePopup()
            }}
        >
            <div className='bg-white px-10 pt-10 pb-20 min-w-[270px] rounded-md flex flex-col'
            >
                {children}
            </div>
        </div>
    )
}