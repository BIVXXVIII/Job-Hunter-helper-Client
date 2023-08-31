import { useSelector } from "react-redux"
import SetTheProblemLayaout from "./components/Layaout/SetTheProblemLayaout"
import { RootState } from "@/app/store"
import CreateVacancys from "./CreateVacancys/CreateVacancys"
import CreateMarkers from "./CreateMarkers/CreateMarkers"
import CreateGroup from "./CreateMarkerGroups/CreateGroup"
import CreateContext from "./CreateContext/CreateContext"
import CreatePlan from "./CreatePlan/CreatePlan"

function SetTheProblem() {
    const iterration = useSelector((state: RootState) => state.createStatus.currentStep)
    return (
        <SetTheProblemLayaout>
            {iterration === 0 ? <CreateVacancys /> : null}
            {iterration === 1 ? <CreateMarkers /> : null}
            {iterration === 2 ? <CreateGroup /> : null}
            {iterration === 3 ? <CreateContext /> : null}
            {iterration === 4 ? <CreatePlan /> : null}
        </SetTheProblemLayaout>
    )
}

export default SetTheProblem