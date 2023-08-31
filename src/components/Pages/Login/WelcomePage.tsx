import { login } from '@/app/slices/userSlice'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons'
import React from 'react'
import { useDispatch } from 'react-redux'
import LoginInputField from './LoginInputField'

type Props = {}

export default function WelcomePage({ }: Props) {

    const dispatch = useDispatch()
    return (
        <div className='flex min-h-screen bg-pattern-welcome items-center justify-center'>
            <div className='bg-white w-[400px] min-h-[200px] p-10 rounded-md'>
                <LoginInputField />
                <ButtonRegular onClick={() => {
                    dispatch(login({
                        userId: '1',
                        userName: 'John Doe',
                        userProperties: []
                    }))
                }}>login</ButtonRegular>
            </div>
        </div>
    )
}