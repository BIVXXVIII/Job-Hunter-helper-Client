import { sortByValue } from './hooks/sortByValue'

import { getMarkerValue } from './hooks/getMarkersValue'
import { getMarkerGroups, getMarkers } from '@/components/Hooks/getStateData';


export default function MarkersValue() {
    const markers = getMarkers()
    const groups = getMarkerGroups()



    const titleClasses = `font-bold`;
    const markersWithValue = getMarkerValue(groups, markers)
    return (
        <div className='flex-grow'>
            <div className='border-b pb-3'>
                <h3 className={titleClasses}>Best 5</h3>
                {markersWithValue
                    .sort((marker1, marker2) => sortByValue(marker1.value, marker2.value))
                    .filter((marker) => {
                        if (marker.value === 'unset') return false
                        if (marker.value === 'not-ready') return false
                        return true
                    })
                    .map(marker => <div key={marker.markerBody.id}>
                        <p className='flex justify-between gap-5'>
                            <span className='font-bold'>{marker.markerBody.title}</span>
                            <span className='font-thin'>{marker.value}</span></p>
                    </div>).slice(0, 5)}
            </div>
            <div className='pt-2'>
                <h3 className={titleClasses}>Worst</h3>
                {markersWithValue.sort((marker1, marker2) => sortByValue(marker1.value, marker2.value))
                    .filter((marker) => {
                        if (marker.value === 'unset') return true
                        if (marker.value === 'not-ready') return true
                        return false
                    })
                    .map(marker => <div key={marker.markerBody.id}>
                        <p className='flex justify-between gap-5'>
                            <span className='font-bold'>{marker.markerBody.title}</span>
                            <span className='font-thin'>{marker.value}</span>
                        </p>
                    </div>).slice(0, 5)}
            </div>
        </div>
    )
}

