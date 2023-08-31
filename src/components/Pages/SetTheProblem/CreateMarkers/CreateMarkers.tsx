import Vacancy from './components/Vacancy';
import CreateMarker from './components/CreateMarker';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createMarker } from '@/app/slices/creationDataSlice';
import { MarkersGalery } from '@/components/UI/Markers/MarkerGalery';
import { getMarkers, getVacancys } from '@/components/Hooks/getStateData';
import { changeAllowStep } from '@/app/slices/createStatusSlice';


export default function CreateMarkers() {
    const dispatch = useDispatch()
    const vacancys = getVacancys()
    const markers = getMarkers()
    const [inpText, setInputText] = useState('')

    const handleBtn = () => {
        const matchMarkers = markers.find(marker => marker.title === inpText)
        if (matchMarkers) return
        if (inpText.trim().length === 0) return
        dispatch(createMarker(
            {
                title: inpText,
                id: `marker%${new Date().toISOString()}`,
            }
        ))
        setInputText('')
    }
    useEffect(() => {
        if (markers.length > 0) {
            dispatch(changeAllowStep(true))
        }
    }, [markers])
    return (
        <>
            <div className='border-b '>
                <div className='flex items-center gap-4'>
                    <CreateMarker
                        inpText={inpText}
                        setInputText={setInputText}
                        handleBtn={handleBtn}
                    />
                </div>
                <MarkersGalery markersId={markers.map(marker => marker.id)} keyModificator='step2Galery' className='mb-4 gap-2' />
            </div>
            {vacancys.map(vacancy => <Vacancy vacancyData={vacancy} key={`${vacancy.id}Vaclist`} />)}
        </>
    )
}