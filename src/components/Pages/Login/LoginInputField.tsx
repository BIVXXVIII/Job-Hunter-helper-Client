import React from 'react'

type Props = {}

export default function LoginInputField({ }: Props) {
    return (
        <div className='flex [&>label]:flex [&>label]:justify-between [&>label]:gap-5 [&>label]:w-full mb-5 flex-col gap-4 px-5'>
            <label>
                <input type="text" className='border' />
                <span>login</span>
            </label>
            <label>
                <input type="password" className='border' />
                <span>password</span>
            </label>
        </div>
    )
}