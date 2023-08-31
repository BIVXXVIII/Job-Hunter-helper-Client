import { TextField } from '@mui/material'

type Props = {
    titleInp: string,
    setTitleInp: React.Dispatch<React.SetStateAction<string>>,
    descriptionInp: string,
    setDescriptionInp: React.Dispatch<React.SetStateAction<string>>,
    disabled: boolean
}

export default function CreateDetails({ titleInp, setDescriptionInp, descriptionInp, setTitleInp, disabled }: Props) {


    return (
        <div className='flex flex-col w-1/2 mt-4'>
            <TextField
                disabled={disabled}
                label='Назва проекту'
                size='small'
                sx={{ marginBottom: '0.5rem' }}
                value={titleInp}
                onChange={(e) => { setTitleInp(e.target.value) }}
            />
            <TextField
                disabled={disabled}
                label='Опис Проекту'
                sx={{ marginBottom: '0.5rem' }}
                multiline
                rows={4}
                value={descriptionInp}
                onChange={(e) => {
                    setDescriptionInp(e.target.value)
                }}
            />

        </div>
    )
}