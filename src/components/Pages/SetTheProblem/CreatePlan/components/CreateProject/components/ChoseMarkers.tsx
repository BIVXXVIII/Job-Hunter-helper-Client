import React, { useState, useEffect } from 'react'
import { MarkersButtonGalery } from '@/components/UI/Markers/MarkerGalery'
import { MarkerType } from '@/assets/types&props/types'
import { getMarkers } from '@/components/Hooks/getStateData'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons'
import { useDispatch } from 'react-redux'
import { updateProjectMarkers } from '@/app/slices/creationDataSlice'
type Props = {
    setMarkersStatus: React.Dispatch<React.SetStateAction<boolean>>,
    projectFlag: boolean
}

export default function ChoseMarkers({ setMarkersStatus, projectFlag }: Props) {
    const [select, setSelect] = useState<MarkerType[]>([])
    const [added, setAdded] = useState<MarkerType[]>([])
    const [selectInAdded, setSelectInAdded] = useState<MarkerType[]>([])
    const markers = getMarkers()
    const dispatch = useDispatch()
    const markerHandleClick = (targetId: string) => {
        const targetMarker = markers.find(marker => marker.id === targetId)!
        if (select.includes(targetMarker)) {
            setSelect([...select.filter(marker => marker.id !== targetId)])
            return
        }
        setSelect([...select, targetMarker])
    }
    const addedHandleClick = (targetId: string) => {
        const targetMarker = markers.find(marker => marker.id === targetId)!
        if (selectInAdded.includes(targetMarker)) {
            setSelectInAdded([...selectInAdded.filter(marker => marker.id !== targetId)])
            return
        }
        setSelectInAdded([...selectInAdded, targetMarker])
    }
    useEffect(() => {
        if (added.length === 0) {
            setMarkersStatus(false)
            return
        }
        setMarkersStatus(true)
    }, [added])
    useEffect(() => {
        if (projectFlag !== false) {
            dispatch(updateProjectMarkers(added.map(marker => marker.id)))
        }
    }, [projectFlag])
    const inactiveButtonClasses = 'opacity-10 cursor-default transition-all duration-200';
    const optionButtonClasses = `transition-all duration-200 my-4`;
    return (
        <div className='flex'>
            <div className='w-[40%]'>
                <h4>non selected</h4>
                <MarkersButtonGalery
                    keyModificator='project Markers'
                    markersId={markers.filter(marker => !added.includes(marker)).map(marker => marker.id)}
                    select={select}
                    markerHandleClick={markerHandleClick}
                    optionsAvaible={false}
                />
            </div>
            <div className='px-10 border-l border-r mx-5'>
                <ButtonRegular
                    className={
                        `${optionButtonClasses} ${select.length === 0 ? inactiveButtonClasses : ' '}`
                    }
                    onClick={() => {
                        setAdded([...added, ...select])
                        setSelect([])
                    }}
                >add {`>>`}</ButtonRegular>
                <ButtonRegular
                    className={`${optionButtonClasses} ${selectInAdded.length === 0 ? inactiveButtonClasses : ' '}`}
                    onClick={() => {
                        setAdded([...added.filter(marker => !selectInAdded.includes(marker))])
                        setSelectInAdded([])
                    }}>remove</ButtonRegular>
            </div>
            <div className='w-[40%]'>
                <h4>selected</h4>
                <MarkersButtonGalery
                    keyModificator='projectSelectedMarcers'
                    markersId={added.map(marker => marker.id)}
                    select={selectInAdded}
                    markerHandleClick={addedHandleClick}
                    optionsAvaible={false}
                />
            </div>
        </div>
    )
}