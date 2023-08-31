import { MarkerType, MarkersGroup, ContextStatus } from "@/assets/types&props/types"
import { statusReduce } from "./statusReduce"

export type AdvMarkerType = {
    value: ContextStatus,
    markerBody: MarkerType
}


export const getMarkerValue = (
    groups: MarkersGroup[],
    markers: MarkerType[]
) => {
    const calcMarkerValue = (marker: MarkerType): AdvMarkerType => {
        const valueFromGroups = groups.filter(group => group.markersId.includes(marker.id)).map(group => {
            if (group.groupStatus === undefined) return 'unset'
            return group.groupStatus
        })
        if (valueFromGroups.length === 0) return {
            value: marker.markerStatus || 'unset',
            markerBody: marker
        }
        return {
            value: statusReduce(valueFromGroups) || marker.markerStatus || 'unset',
            markerBody: marker
        }
    }
    return markers.map(calcMarkerValue)
}