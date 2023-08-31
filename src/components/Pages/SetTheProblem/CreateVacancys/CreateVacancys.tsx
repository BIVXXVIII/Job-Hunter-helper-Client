import { RootState } from "@/app/store"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputField from "./components/InputField"
import VacancysMonitor from "./components/VacancysMonitor"
import { createVacancy } from "@/app/slices/creationDataSlice"
import { changeAllowStep } from "@/app/slices/createStatusSlice"

type HelperText = `lenght can't be a zero` | ' ' | 'alredy have this vacancy URL'

export default function CreateVacancys() {
    const [helperText, setHelperText] = useState<HelperText>(' ')
    const dispatch = useDispatch()
    const vacancies = useSelector((state: RootState) => state.craetionData.vacancies)
    const [inputText, setInputText] = useState('')
    const clickHandler = () => {
        if (inputText.trim().length === 0) return setHelperText(`lenght can't be a zero`)
        const urlMatch = vacancies.filter(vacancy => vacancy.url === inputText.trim())
        if (urlMatch.length > 0) return setHelperText('alredy have this vacancy URL')
        dispatch(createVacancy(inputText.trim()))
        setHelperText(' ')
        setInputText('')
    }

    useEffect(() => {
        if (vacancies.length > 0) {
            dispatch(changeAllowStep(true))
        }
    }, [vacancies])
    return (
        <div className='flex justify-between'>
            <InputField inputText={inputText} setInputText={setInputText} helperText={helperText} clickHandler={clickHandler} />
            <VacancysMonitor vacancies={vacancies} />
        </div>
    )
}

