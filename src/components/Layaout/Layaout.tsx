import Sidebar from "./components/SideBar"
import Header from "./components/Header"
type LayaoutProps = {
    children: React.ReactNode
}

export default function Layaout({ children }: LayaoutProps) {
    return (
        <div className="flex min-h-screen relative">
            <Sidebar />
            <div className="flex-grow flex flex-col">
                {/* <Header /> */}
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </div>
    )
}