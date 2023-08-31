import GroupDisplay from './GroupDisplay'
import { getMarkerGroups } from '@/components/Hooks/getStateData'

export default function GroupsList() {
    const groups = getMarkerGroups()
    return (
        <div className='flex flex-col max-w-md min-w-sm gap-2'>
            {groups.map(group => <GroupDisplay group={group} key={`groupViev${group.id}`} />)}
        </div>
    )
}