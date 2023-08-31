import { VacancyType } from "@/assets/types&props/types"

type Props = {
    vacancies: VacancyType[]
}

export default function VacancysMonitor({ vacancies }: Props) {
    return (
        <div>
            <p>ти додав {vacancies.length} вакансій</p>
            {vacancies.map((vacancy, index) => <p key={`vacancySite${index}`}>{vacancy.siteName} </p>)}
        </div>
    )
}