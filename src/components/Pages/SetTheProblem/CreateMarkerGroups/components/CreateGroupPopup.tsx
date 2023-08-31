import { useState } from 'react'
import { GroupColorName, MarkerType } from '@/assets/types&props/types'
import { PopupDef } from '@/components/UI/Popup/Popup'
import { TextField } from '@mui/material'
import CreateGroupPopupSelect from './CreateGroupPopupSelect'
import { MarkersGalery } from '@/components/UI/Markers/MarkerGalery'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons'
import { useDispatch } from 'react-redux'
import { createGroup } from '@/app/slices/creationDataSlice'


type Props = {
    selected: MarkerType[],
    closePopup: () => void
}

export default function CreateGroupPopup({ closePopup, selected }: Props) {
    const [inpText, setInputText] = useState('')
    const [color, setColor] = useState<GroupColorName>('default')
    const dispatch = useDispatch()

    const buttonHandler = () => {
        if (inpText.trim().length === 0) return
        dispatch(createGroup({
            title: inpText,
            id: `group%${new Date().toISOString()}`, markersId: selected.map(marker => marker.id),
            style: color,
        }))
        closePopup()
    }

    return (
        <PopupDef closePopup={closePopup}>
            <div className="mb-4 relative">


                <TextField
                    label={'Marker group'}
                    variant='standard'
                    value={inpText}
                    autoComplete="marker-group"
                    onChange={(e) => {
                        setInputText(e.target.value)
                    }}
                    autoFocus
                    inputProps={{ maxLength: 30 }}

                />
                <div className='absolute -bottom-[26px] right-0 text-sm opacity-60'>max {inpText.length}/30</div>
            </div>
            <CreateGroupPopupSelect setColor={setColor} color={color} />
            <MarkersGalery className='gap-2' markersId={selected.map(marker => marker.id)} keyModificator='marker in popup' />
            <ButtonRegular
                onClick={buttonHandler}
                className="mt-5 self-end"
            >
                create
            </ButtonRegular>
        </PopupDef>
    )
}