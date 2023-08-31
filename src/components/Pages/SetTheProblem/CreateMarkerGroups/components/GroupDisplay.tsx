import { MarkersGroup } from '@/assets/types&props/types'
import { MarkersGalery } from '@/components/UI/Markers/MarkerGalery'
import { useDispatch } from 'react-redux'
import { trashIcon, plusIcon } from '@/assets/svg/svgCollection'
import { useEffect, useState } from 'react'
import { ButtonOptions } from '@/components/UI/Buttons/Buttons'
import { PopupDef } from '@/components/UI/Popup/Popup'
import AddMarkerPopup from './AddMarkerToGroupPopupSelect'
import { getMarkers } from '@/components/Hooks/getStateData'
import { deleteGroup, removeMarkerFromGroup } from '@/app/slices/creationDataSlice'

type GroupProps = {
    group: MarkersGroup
}

export default function GroupDisplay({ group }: GroupProps) {
    const dispatch = useDispatch()
    const [showMarker, setShowMarker] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    const markers = getMarkers()
        .filter(marker => group.markersId.includes(marker.id))

    useEffect(() => {
        if (group.markersId.length === 0) setShowMarker(false)
        if (group.markersId.length !== 0) setShowMarker(true)
    }, [group.markersId])


    return (
        <>
            <div className='flex flex-col rounded-md border-black/30 border [&>*]:px-4'>
                <div className='flex justify-between items-center bg-slate-200/40 py-1'>
                    <p className='font-semibold  py-2'>{group.title}</p>
                    <div className='flex gap-3'>
                        <ButtonOptions
                            onClick={() => {
                                setShowPopup(true)
                            }}>
                            {plusIcon}
                        </ButtonOptions>
                        <ButtonOptions
                            onClick={() => {
                                dispatch(deleteGroup(group.id))
                            }}
                        >
                            {trashIcon}
                        </ButtonOptions>

                    </div>
                </div>
                {showMarker ? <MarkersGalery
                    className='gap-1 pb-4 mt-3'
                    markersId={markers.map(marker => marker.id)}
                    keyModificator={`groupView${group.title}`}
                    optionsAvaible
                    options={[{
                        text: 'remove', option: (markerid) => {
                            dispatch(removeMarkerFromGroup({ groupId: group.id, markerId: markerid }));
                        }
                    }]}
                /> : null}
            </div>
            {showPopup ? <PopupDef closePopup={() => { setShowPopup(false) }}><AddMarkerPopup group={group} closePopup={() => { setShowPopup(false) }} /></PopupDef> : null}
        </>
    )
}