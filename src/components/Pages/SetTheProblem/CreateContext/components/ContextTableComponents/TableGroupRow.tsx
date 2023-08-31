import { useState } from 'react'

import { ContextStatus, MarkersGroup } from '@/assets/types&props/types'
import { MarkersGalery } from '@/components/UI/Markers/MarkerGalery'
import StatusSelect from './StatusSelect'

type Props = { group: MarkersGroup }

export default function TableGroupRow({ group }: Props) {
    const [status, setStatus] = useState<ContextStatus>(group.groupStatus ? group.groupStatus : 'unset')

    return (
        <tr className='flex flex-col md:table-row-group'>
            <td>{group.title}</td>
            <td>
                <MarkersGalery
                    markersId={group.markersId}
                    keyModificator={`${group.id}marker`}
                    className='gap-2'
                />
            </td>

            <StatusSelect status={status} setStatus={setStatus} id={group.id} />

        </tr>
    )
}