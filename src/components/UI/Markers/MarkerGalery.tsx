import { MarkerType } from "@/assets/types&props/types"
import { MarkerDefault, MarkerButton } from "./Markers"
import { MenuAdvanceOption } from './Markers'
import { getMarkers } from "@/components/Hooks/getStateData"

type MarkersGaleryProps = {
    markersId: string[],
    keyModificator: string,
    className?: string,
    options?: MenuAdvanceOption[],
    optionsAvaible?: boolean
}

export function MarkersGalery({ markersId, keyModificator, className, options, optionsAvaible }: MarkersGaleryProps) {
    const markers = getMarkers().filter(marker => markersId.includes(marker.id))

    return (
        <div className={`flex flex-wrap ${className ? className : ''}`}>
            {markers.map(marker =>
                <MarkerDefault
                    key={`markerGalery%${keyModificator}%${marker.id}`}
                    marker={marker}
                    options={options}
                    optionsAvaible={optionsAvaible}
                />
            )}
        </div>
    )
}

type MarkersButtonGaleryProps = MarkersGaleryProps & {
    select: MarkerType[],
    markerHandleClick: (targetID: string) => void

}

export function MarkersButtonGalery({
    markersId,
    keyModificator,
    select,
    markerHandleClick,
    className,
    optionsAvaible = true
}: MarkersButtonGaleryProps) {

    const markers = getMarkers()
        .filter(marker => markersId.includes(marker.id))

    const selectMarkerClasses = `relative bottom-2 right-2`;
    return (
        <div className={`flex gap-2 flex-wrap ${className ? className : ''}`}>
            {markers.map(marker =>
                <div
                    key={`markerGalery%${keyModificator}%${marker.id}`}
                    className="relative"
                >
                    <MarkerButton
                        className={select.includes(marker) ? selectMarkerClasses : undefined}
                        onClick={() => { markerHandleClick(marker.id) }}
                        marker={marker}
                        optionsAvaible={optionsAvaible}
                    />
                    <div className="bg-gray-400/10 absolute top-[2px] left-[2px] right-[2px] bottom-[2px] -z-10 rounded-xl shadow-gray-400"></div>
                </div>
            )}

        </div>
    )
}