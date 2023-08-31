import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { MarkerType, VacancyType } from '@/assets/types&props/types';

type Props = {
    markerSelect: string,
    setMarkerSelect: React.Dispatch<React.SetStateAction<string>>,
    vacancyData: VacancyType,
    markers: MarkerType[]

}

export default function VacancyMarkerSelect(
    { markerSelect, setMarkerSelect, vacancyData, markers }: Props
) {

    const handleSelect = (event: SelectChangeEvent) => {
        setMarkerSelect(event.target.value)
    }


    return (
        <FormControl sx={{ width: '300px' }}>
            <InputLabel
                id={`${vacancyData.siteName}markers-label`}
            >
                markers
            </InputLabel>
            <Select
                variant='standard'
                onChange={handleSelect}
                value={markerSelect}
                label='marker'
                placeholder='markers'
                disabled={markers
                    .filter(marker =>
                        !vacancyData.markersId.includes(marker.id)
                    ).length === 0}
            >
                {markers
                    .filter(marker =>
                        !vacancyData.markersId.includes(marker.id)
                    )
                    .map(marker =>
                        <MenuItem
                            key={vacancyData.id + '/' + marker.id}
                            value={marker.title}
                        >
                            {marker.title}
                        </MenuItem>
                    )}
            </Select>
        </FormControl>
    )
}