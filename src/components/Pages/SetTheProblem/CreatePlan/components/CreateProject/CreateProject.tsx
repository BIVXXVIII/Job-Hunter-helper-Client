import { useState } from 'react'
import ChoseMarkers from './components/ChoseMarkers'
import CreateDetails from './components/CreateDetails'
import { ButtonRegular } from '@/components/UI/Buttons/Buttons'
import { useDispatch } from 'react-redux'
import { createProjectPrototype } from '@/app/slices/creationDataSlice'



export default function CreateProject() {
    const [titleInp, setTitleInp] = useState('')
    const [descriptionInp, setDescriptionInp] = useState('')
    const [markersStatus, setMarkersStatus] = useState(false)
    const [createFlag, setCreateFlag] = useState(false)
    const dispatch = useDispatch()
    const createProject = (timeLimit: "default" | "long" | "short") => {
        if (titleInp.length !== 0 && !markersStatus) return
        console.log(titleInp.length !== 0 && markersStatus, markersStatus);
        dispatch(createProjectPrototype({
            id: `project%${new Date().toISOString()}`,
            title: titleInp,
            description: descriptionInp.length === 0 ? undefined : descriptionInp,
            timeLimit: timeLimit,
            creationTime: new Date().toDateString(),
            dependencies: {
                vacanciesId: [],
                markersId: [],
                markerGroupsId: []
            }
        }))
        setCreateFlag(true)
    }
    const createStandartProject = () => {
        createProject('default')
    }
    const createLongTimeProject = () => {
        createProject('long')
    }
    const createShortTimeProject = () => {
        createProject('short')
    }

    const buttonDisableClasses = 'opacity-40 cursor-default';
    const buttonClasses = 'w-full ' + ((titleInp.length !== 0 && markersStatus) ? "" : buttonDisableClasses);
    return (
        <div className='w-full flex-frow !max-w-full'>
            <ChoseMarkers
                setMarkersStatus={setMarkersStatus}
                projectFlag={createFlag}
            />
            <div className='flex'>
                <CreateDetails
                    disabled={createFlag}
                    titleInp={titleInp}
                    setTitleInp={setTitleInp}
                    descriptionInp={descriptionInp}
                    setDescriptionInp={setDescriptionInp}
                />
                <div className='w-1/2 pl-4 border-l ml-6 py-5 flex items-center flex-col justify-around'>
                    <ButtonRegular
                        onClick={createStandartProject}
                        className={buttonClasses}
                    >
                        Створити звичайний проект
                    </ButtonRegular>
                    <ButtonRegular
                        onClick={createShortTimeProject}
                        className={buttonClasses}
                    >
                        Створити короткотривалий проект
                    </ButtonRegular>
                    <ButtonRegular
                        onClick={createLongTimeProject}
                        className={buttonClasses}
                    >
                        Створити довготривалий проект
                    </ButtonRegular>
                </div>
            </div>
        </div>
    )
}