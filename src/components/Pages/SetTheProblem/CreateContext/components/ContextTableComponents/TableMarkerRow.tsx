import { MarkerType } from "@/assets/types&props/types"
import StatusSelect from "./StatusSelect"
import { useState } from 'react'

type Props = { marker: MarkerType }
import { ContextStatus } from '@/assets/types&props/types'

export default function TableMarkerRow({ marker }: Props) {
    const [status, setStatus] = useState<ContextStatus>(marker.markerStatus ? marker.markerStatus : 'unset')

    return (
        <tr>
            <td colSpan={2}>{marker.title}</td>
            <StatusSelect id={marker.id} status={status} setStatus={setStatus} isMarker />
        </tr>
    )
}