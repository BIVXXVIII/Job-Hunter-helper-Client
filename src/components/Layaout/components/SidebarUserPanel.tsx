import { getUserData } from '@/components/Hooks/getUserState'
import React from 'react'

type Props = {}

export default function SidebarUserPanel({ }: Props) {
    const userData = getUserData()!
    const refactoringName = () => {
        const fullname = userData?.userName.split(' ')
        if (fullname.length === 0) return fullname[0]
        fullname[0] = fullname[0].slice(0, 1)
        return fullname.join('. ')
    }
    const shortName = refactoringName()
    return (
        <div title={userData.userName}>{shortName}</div>
    )
}