import { getVacancys, getMarkers, getMarkerGroups } from '@/components/Hooks/getStateData'
import { getMarkerValue } from './hooks/getMarkersValue'
import VacancyDispay from './VacancyDispay'


export default function VacanciesReady() {
    const vacancies = getVacancys()
    const markers = getMarkers()
    const groups = getMarkerGroups()

    const markersWithValue = getMarkerValue(groups, markers)
    return (
        <div className='bg-slate-100/50'>
            {vacancies.slice(0, 5).map(vacancy =>
                <VacancyDispay key={vacancy.id} vacancy={vacancy} markers={markersWithValue} />
            )}
        </div>
    )
}

