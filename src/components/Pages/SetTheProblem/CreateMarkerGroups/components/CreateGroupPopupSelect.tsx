import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { groupColors } from "@/assets/types&props/MarkerGroupColor";
import { GroupColorName } from '@/assets/types&props/types';

type PopupSelectProps = { setColor: React.Dispatch<React.SetStateAction<GroupColorName>>; color: string }

export default function CreateGroupPopupSelect({ setColor, color }: PopupSelectProps) {
    const handleSelect = (event: SelectChangeEvent) => {
        const target = event.target.value as GroupColorName
        setColor(target)
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
                    value={color}
                    label='markers color'
                    placeholder='markers color'
                >

                    {groupColors.map(color => <MenuItem key={color.name + 'colorPicker'} value={color.name}>
                        <div className={`w-full h-full pl-4 rounded-lg ${color.style}`}>{color.name}</div>
                    </MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}