import { RootState } from "@/app/store"
import { useSelector } from "react-redux"

export const getStepAllowStatus = () => {
    return useSelector((state: RootState) => state.createStatus.allowNextStep)
}

