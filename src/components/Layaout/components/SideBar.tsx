import { logout } from "@/app/slices/userSlice"
import { useDispatch } from "react-redux"
import SidebarUserPanel from "./SidebarUserPanel"

export default function Sidebar() {
    const dispatch = useDispatch()
    return (
        <aside className="text-white bg-neutral-700 h-screen sticky top-0 w-20 flex-shrink-0 flex flex-col pt-5 px-2 items-center justify-between pb-10">
            <SidebarUserPanel />
            <button onClick={() => { dispatch(logout()) }} className="flex items-center justify-center gap-0.5">
                <span className="font-semibold">Exit</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative top-[1px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </button>
        </aside>
    )
}