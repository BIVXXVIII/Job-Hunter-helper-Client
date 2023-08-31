import { RootState } from "@/app/store"
import { useSelector } from "react-redux"

export const getUserData = () => {
    return useSelector((state: RootState) => state.userData.activeUser)
}

export const getLoginStatus = () => {
    return useSelector((state: RootState) => state.userData.login)
}
