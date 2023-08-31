import { useEffect } from 'react'
import ContextTable from './components/ContextTable'
import { useDispatch } from 'react-redux'
import { changeAllowStep } from '@/app/slices/createStatusSlice'
export default function CreateContext() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeAllowStep(true))
    }, [])
    return (
        <div className='flex flex-col'>
            <ContextTable />
        </div>
    )
}