import { useState, useEffect } from 'react'
import { MarkerType } from '@/assets/types&props/types'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons'
import { MarkersButtonGalery } from '@/components/UI/Markers/MarkerGalery'
import CreateGroupPopup from './components/CreateGroupPopup'
import GroupsList from './components/GroupsList'
import { getMarkerGroups, getMarkers } from '@/components/Hooks/getStateData'
import { useDispatch } from 'react-redux'
import { changeAllowStep } from '@/app/slices/createStatusSlice'

export default function CreateGroup() {
    const [select, setSelect] = useState<MarkerType[]>([])
    const [popupVisible, setPopupVisible] = useState(false)
    const markers = getMarkers()
    const groups = getMarkerGroups()
    const dispatch = useDispatch()
    const markerHandleClick = (targetID: string) => {
        const targetMarker = markers.find(marker => marker.id === targetID)!
        if (select.includes(targetMarker)) {
            setSelect(
                [...select.filter(marker => marker !== targetMarker)]
            )
            return
        }
        setSelect([...select, targetMarker])
    }
    useEffect(() => { setSelect([]) }, [markers])
    const closePopup = () => {
        setSelect([])
        setPopupVisible(false)
    }
    useEffect(() => {
        if (groups.length > 0) { dispatch(changeAllowStep(true)) }
    }, [groups])
    return (
        <div className='flex justify-between'>
            <div>
                <div>обранно {select.length}</div>

                <ButtonRegular
                    onClick={() => { setPopupVisible(true) }}
                >
                    створити группу
                </ButtonRegular>

                <MarkersButtonGalery
                    className='mt-4'
                    markersId={markers.map(marker => marker.id)}
                    markerHandleClick={markerHandleClick} keyModificator='step3'
                    select={select} />
            </div>
            <div className='border-l pl-8 min-w-[40%]'>
                <div className='font-semibold'>створенні группи:</div>
                <GroupsList />
            </div>
            {popupVisible ? <CreateGroupPopup
                selected={select}
                closePopup={closePopup}
            /> : null}
        </div>
    )
}