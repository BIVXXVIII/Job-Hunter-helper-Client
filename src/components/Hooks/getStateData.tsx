import { RootState } from "@/app/store"
import { MarkerType, MarkersGroup, VacancyType } from "@/assets/types&props/types"
import { useSelector } from "react-redux"

export const getMarkers = (): MarkerType[] => {
    return useSelector((state: RootState) => state.craetionData.markers)
}

export const getVacancys = (): VacancyType[] => {
    return useSelector((state: RootState) => state.craetionData.vacancies
    )
}

export const getMarkerGroups = (): MarkersGroup[] => {
    return useSelector((state: RootState) => state.craetionData.groups)
}