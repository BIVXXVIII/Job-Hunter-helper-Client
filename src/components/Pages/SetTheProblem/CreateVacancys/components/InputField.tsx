import React from 'react'
import { TextField } from '@mui/material'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons'
type Props = {
    inputText: string,
    setInputText: React.Dispatch<React.SetStateAction<string>>,
    clickHandler: () => void,
    helperText: string
}

export default function InputField({ inputText, setInputText, clickHandler, helperText }: Props) {
    return (
        <div className='flex flex-col'>
            <div className='mb-4'>
                <TextField
                    error={helperText.trim().length ? true : false}
                    title='посилання на вакансію'
                    label={'link'}
                    value={inputText}
                    onChange={(e) => { setInputText(e.target.value) }}
                    variant='standard'
                    helperText={helperText}
                />
            </div>
            <ButtonRegular onClick={clickHandler} className='self-start'>add</ButtonRegular>

        </div>
    )
}