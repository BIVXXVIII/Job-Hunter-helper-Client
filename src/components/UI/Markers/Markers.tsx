import { MarkerType } from "@/assets/types&props/types";
import { groupColors } from "@/assets/types&props/MarkerGroupColor";
import React, { useState } from "react";
import { MouseEventHandler } from "react"
import { useDispatch } from 'react-redux'
import { deleteMarker } from "@/app/slices/creationDataSlice";
import { getMarkerGroups } from "@/components/Hooks/getStateData";

type MarkerProps = {
    marker: MarkerType,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    options?: MenuAdvanceOption[],
    optionsAvaible?: boolean
}

// Marker default withot select function

export function MarkerDefault({ marker, className, options, optionsAvaible = false }: MarkerProps) {
    const [menuVisible, setMenuVisible] = useState(false)

    const contextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault()
        if (!optionsAvaible) return
        setMenuVisible(true)
    }

    const markerGroupStyle = setMarkerGroupStyle(marker)

    const markerClasses = `px-4 py-0.5  rounded-2xl ring-1 ring-transparent hover:ring-2 hover:ring-slate-400/20 transition-all duration-500 select-none  hover:shadow-lg shadow-sm hover:duration-100  ${markerGroupStyle} ${className ? className : ''}`;

    return (
        <div className="relative" onMouseLeave={() => { setMenuVisible(false) }}
        >
            <div className={markerClasses} onContextMenu={contextMenu}>{marker.title}</div>
            {
                menuVisible ?
                    <MarkerMenu
                        options={options}
                        markerId={marker.id}
                        setMenuVisible={setMenuVisible} />
                    : null
            }
        </div>
    )

}

// Marker with select func on click

export function MarkerButton({ onClick, className, marker, optionsAvaible = true }: MarkerProps) {
    const [menuVisible, setMenuVisible] = useState(false)


    const contextMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!optionsAvaible) return
        setMenuVisible(true)
    }

    const markerGroupStyle = setMarkerGroupStyle(marker)
    const markerClasses = `px-4 py-0.5  rounded-2xl ring-1 ring-transparent hover:ring-2 hover:ring-slate-400/20 transition-all duration-500 select-none hover:shadow-lg shadow-sm hover:duration-100 min-w-[70px] ${markerGroupStyle} ${className ? className : ''}`;


    return (
        <div className="relative"
            onMouseLeave={() => { setMenuVisible(false) }}
        >
            <button onContextMenu={contextMenu} className={markerClasses} onClick={onClick}>
                {marker.title}

            </button>
            {
                menuVisible ?
                    <MarkerMenu
                        markerId={marker.id}
                        setMenuVisible={setMenuVisible} />
                    : null
            }
        </div>
    )
}

// Marker menu

export type MenuAdvanceOption = {
    text: React.ReactNode,
    option: (markerId: string) => void
}

type MenuProps = {
    setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>, markerId: string,
    options?: MenuAdvanceOption[]
}

const MarkerMenu = ({ setMenuVisible, markerId, options }: MenuProps) => {
    const dispatch = useDispatch()
    const optionsCheck = () => {
        if (options === undefined) return false
        if (options.length === 0) return false
        return true
    }
    return <div className="absolute top-full left-0 right-0 px-1 bg-white border border-stone-300/50">
        {optionsCheck() ? options!.map(option =>
            <button
                onClick={() => {
                    option.option(markerId)
                }}
            >{option.text}
            </button>)
            : null
        }
        <button
            onClick={() => {
                dispatch(deleteMarker(markerId))
            }}
        >
            delete
        </button>
        <button onClick={() => {
            setMenuVisible(false)
        }}>close</button>
    </div>
}

// local func for components

const setMarkerGroupStyle = (marker: MarkerType) => {
    const groups = getMarkerGroups()
    const dependencyGroups = groups.filter(group => group.markersId.includes(marker.id))
    const defaultColorStyle = groupColors.find(color => color.name === 'default')!.style
    if (dependencyGroups.length === 0) return defaultColorStyle
    const firstDep = dependencyGroups[0].style
    return groupColors.find(color => color.name === firstDep)!.style
}