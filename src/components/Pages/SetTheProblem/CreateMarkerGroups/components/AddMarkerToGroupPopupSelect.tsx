import { useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from 'react-redux';
import { MarkersGroup } from '@/assets/types&props/types';
import { ButtonRegular } from '@/components/UI/Buttons/Buttons';
import { getMarkers } from '@/components/Hooks/getStateData';
import { addMarkerToGroup } from '@/app/slices/creationDataSlice';

type PopupSelectProps = { group: MarkersGroup, closePopup: () => void }

export default function AddMarkerPopup({ group, closePopup }: PopupSelectProps) {
    const [selectValue, setSelectValue] = useState('unset')

    const markers = getMarkers()
    const dispatch = useDispatch()

    const handleSelect = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value)
    }

    const handleButton = () => {
        if (selectValue === 'unset') return
        dispatch(addMarkerToGroup({ groupId: group.id, markerId: selectValue }))
        closePopup()
    }

    return (
        <div className="mb-4">
            <FormControl fullWidth>
                <InputLabel
                >
                    колір
                </InputLabel>
                <Select
                    variant='standard'
                    onChange={handleSelect}
                    value={selectValue}
                    label='markers color'
                    placeholder='markers color'
                >
                    <MenuItem key={`group%add%marker%$`} value={`unset`}>
                        unset
                    </MenuItem>
                    {markers
                        .filter(marker => group.markersId.includes(marker.id))
                        .map(marker =>
                            <MenuItem
                                key={`group%add%marker%${marker.id}`}
                                value={marker.id}
                            >
                                {marker.title}
                            </MenuItem>
                        )}
                </Select>
            </FormControl>
            <ButtonRegular onClick={handleButton}>add</ButtonRegular>
        </div>
    )
}