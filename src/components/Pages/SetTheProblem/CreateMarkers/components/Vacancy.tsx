import { useState } from 'react'
import { useDispatch } from 'react-redux'
import VacancyMarkerSelect from './VacancyMarkerSelect'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons';
import { MarkersGalery } from '@/components/UI/Markers/MarkerGalery';
import { VacancyType } from '@/assets/types&props/types';
import { getMarkers } from '@/components/Hooks/getStateData';
import { addMarkerToVacancy } from '@/app/slices/creationDataSlice';

type Props = {
    vacancyData: VacancyType,
}

export default function Vacancy({ vacancyData }: Props) {
    const dispatch = useDispatch()


    const [markerSelect, setMarkerSelect] = useState('')
    const markers = getMarkers()

    const handleClick = () => {
        const currentMarkerId = markers
            .find(marker => marker.title === markerSelect)!.id
        dispatch(addMarkerToVacancy({ markerId: currentMarkerId, vacancyId: vacancyData.id }))
    }

    return (
        <div className='border-b pb-4 pt-2'>
            <p
                title={vacancyData.url}
                className='font-semibold text-lg text-neutral-800 mb-2'
            >
                {vacancyData.siteName}
            </p>
            <MarkersGalery
                markersId={vacancyData.markersId}
                keyModificator={`${vacancyData.siteName}markers`}
                className='mb-4 gap-2'
            />
            <div className='flex gap-4 items-center mb-3'>
                <VacancyMarkerSelect
                    markerSelect={markerSelect}
                    setMarkerSelect={setMarkerSelect}
                    vacancyData={vacancyData}
                    markers={markers}
                />
            </div>
            <ButtonRegular onClick={handleClick}>
                додати маркер
            </ButtonRegular>
        </div>
    )
}