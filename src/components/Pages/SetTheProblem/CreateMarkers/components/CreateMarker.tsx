import React from 'react'
import { TextField } from '@mui/material'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons';


type Props = {
    inpText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>,
    handleBtn: () => void
}

export default function CreateMarker({ inpText, setInputText, handleBtn }: Props) {
    return (
        <>
            <div className='mb-3'>
                <TextField
                    label={'Marker'}
                    variant='standard'
                    value={inpText}
                    onChange={(e) => {
                        setInputText(e.target.value)
                    }}
                />
            </div>
            <ButtonRegular
                onClick={handleBtn}
            >
                додати маркер
            </ButtonRegular>
        </>
    )
}