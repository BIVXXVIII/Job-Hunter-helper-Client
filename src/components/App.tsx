import Layaout from "./Layaout/Layaout"
import SetTheProblem from "./Pages/SetTheProblem/SetTheProblem"
import { getLoginStatus } from "./Hooks/getUserState"
import WelcomePage from "./Pages/Login/WelcomePage"
export default function App() {
    const isLogin = getLoginStatus()
    if (!isLogin) return (
        <WelcomePage />
    )
    return (
        <Layaout>
            <SetTheProblem />
        </Layaout>
    )
}