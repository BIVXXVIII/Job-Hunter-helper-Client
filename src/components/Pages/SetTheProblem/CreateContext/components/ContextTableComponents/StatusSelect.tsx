import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ContextStatus } from '@/assets/types&props/types';
import { useDispatch } from 'react-redux';
import { updateGroupContext, updateMarkerContext } from '@/app/slices/creationDataSlice';
type Props = {
    status: ContextStatus,
    setStatus: React.Dispatch<React.SetStateAction<ContextStatus>>
    isMarker?: boolean,
    id: string
}

export default function StatusSelect({ status, setStatus, isMarker = false, id }: Props) {
    const dispatch = useDispatch()
    const handleSelect = (event: SelectChangeEvent) => {
        const target = event.target.value as ContextStatus
        setStatus(target)
    }
    const handleBlur = () => {
        if (isMarker) {
            dispatch(updateMarkerContext({ markerId: id, context: status }))
            return
        }
        dispatch(updateGroupContext({ groupId: id, context: status }))
    }

    return (
        <td className='pt-3 flex justify-center items-center' onBlur={handleBlur} >
            <Box>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ background: '#fff', padding: '0 5px' }} id='selectLabel' >status</InputLabel>
                    <Select
                        fullWidth
                        labelId='selectLabel'
                        value={status}
                        onChange={handleSelect}
                    >
                        <MenuItem value={"unset"} sx={{ color: 'gray', opacity: '50%' }}>не визначенно</MenuItem>
                        <MenuItem value={'ready'} sx={{ color: 'green' }} >готов</MenuItem>
                        <MenuItem value={`think I'm ready`} sx={{ color: 'yellowgreen' }} >думаю я готов</MenuItem>
                        <MenuItem value={"averadge"} sx={{ color: 'gold' }}>cередне</MenuItem>
                        <MenuItem value={`think I'm not ready`} sx={{ color: 'orange' }}>думаю я не готов</MenuItem>
                        <MenuItem value={"not-ready"} sx={{ color: 'red' }}>не готов</MenuItem>

                    </Select>
                </FormControl>
            </Box>
        </td>
    )
}