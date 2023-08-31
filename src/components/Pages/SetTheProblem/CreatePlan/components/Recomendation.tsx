import { VacancyType } from '@/assets/types&props/types'
import { getMarkers, getVacancys } from '@/components/Hooks/getStateData'
type Props = {}

export default function Recomendation({ }: Props) {
    return (
        <div>
            Найбільше велью буде при створенні пет проекту який включає в себе наступні крітерії:
            <br />
            Markers:
            <MarkersMention />
        </div>
    )
}

const MarkersMention = () => {
    const markers = getMarkers()
    const vacancies = getVacancys()
    const calculateMention = () => {
        return markers.map(marker => {
            const tempArr: VacancyType[] = []
            vacancies.forEach(vacancy => {
                if (vacancy.markersId.includes(marker.id)) {
                    tempArr.push(vacancy)
                }
            })
            return {
                id: marker.id,
                title: marker.title,
                vacancies: [...tempArr]
            }
        })

    }

    return (<>
        {
            calculateMention()
                .sort((marker1, marker2) => {
                    if (marker2.vacancies.length > marker1.vacancies.length) return 1
                    if (marker1.vacancies.length > marker2.vacancies.length) return -1
                    return 0
                })
                .map(({ title, id, vacancies }) => <div key={id}>{title} використовується в {vacancies.length}</div>)
        }
    </>)
}