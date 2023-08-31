import { VacancyType } from '@/assets/types&props/types'
import { useState } from 'react'
import { statusReduce } from './hooks/statusReduce'
import { AdvMarkerType } from './hooks/getMarkersValue'
type Props = {
    vacancy: VacancyType,
    markers: AdvMarkerType[]
}

export default function VacancyDispay({ vacancy, markers }: Props) {
    const [infoVisible, setInfoVisible] = useState(false)
    return (
        <div>
            <button
                onClick={() => {
                    setInfoVisible(!infoVisible)
                }}
                key={vacancy.id}
                className='flex gap-4 justify-between cursor-pointer bg-slate-300 duration-700 hover:duration-200 hover:bg-slate-400 w-full px-4 py-3'>
                <span>{vacancy.siteName}</span>
                <span className='font-thin'>{
                    statusReduce(markers
                        .filter(marker => vacancy.markersId.includes(marker.markerBody.id)).map(marker => marker.value))
                }</span>
            </button>
            <div
                className={`py-4 px-4 bg-stone-100 ${infoVisible ? "block" : 'hidden h-0'}`}>
                <a href={vacancy.url} className='hover:text-blue-500 hover:font-bold duration-100 opacity-50 text-right block' target='_blank'>link</a>
                {markers
                    .filter(marker => vacancy.markersId.includes(marker.markerBody.id))
                    .map(marker => <div key={marker.markerBody.id}>
                        <p className='flex justify-between gap-5'>
                            <span className='font-medium'>{marker.markerBody.title}</span>
                            <span className='font-thin'>{marker.value}</span></p>
                    </div>)}
            </div>
        </div>
    )
}