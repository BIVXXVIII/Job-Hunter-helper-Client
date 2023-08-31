import TableGroupRow from './ContextTableComponents/TableGroupRow'
import { getMarkerGroups, getMarkers } from '@/components/Hooks/getStateData'
import TableMarkerRow from './ContextTableComponents/TableMarkerRow'
import { MarkerType } from '@/assets/types&props/types'

export default function ContextTable() {
    const groups = getMarkerGroups()
    const markers = getMarkers()

    const filterFunc = (marker: MarkerType): boolean => {
        const groupsBoolean = groups.map(group => group.markersId.includes(marker.id))
        return !groupsBoolean.reduce((prev, curr) => {
            if (prev || curr) return true
            return false
        })
    }
    const filtredmarkers = markers.filter(filterFunc)

    return (
        <table className='[&>*>*]:border [&>*>*]:px-2'>
            <tr className='bg-gray-500 text-white' >
                <th colSpan={3} className='py-2'>Groups</th>
            </tr>
            <tr className='hidden md:table-row-group'>
                <th className='min-w-[150px]'>group name</th>
                <th className='w-full'>markers</th>
                <th>status</th>
            </tr>
            {groups.length === 0 ?
                <tr><td colSpan={3} align='center'>no groups found</td></tr> :
                groups.map(group => <TableGroupRow key={group.id} group={group} />)
            }


            <tr className='bg-gray-500 text-white'>
                <th colSpan={3} className='py-2'>Markers</th>
            </tr>
            <tr>
                <th colSpan={2}>marker</th>
                <th>status</th>
            </tr>
            {
                markers.length === 0 ?
                    <tr><td colSpan={3} align='center'>no markers</td></tr> :
                    filtredmarkers.map(marker => <TableMarkerRow key={marker.id} marker={marker} />)}


        </table>
    )
}