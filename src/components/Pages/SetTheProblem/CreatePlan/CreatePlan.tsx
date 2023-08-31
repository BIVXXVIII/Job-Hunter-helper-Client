import MarkersValue from './components/MarkersValue'
import VacanciesReady from './components/VacanciesReady'
import Recomendation from './components/Recomendation'
import CreateProject from './components/CreateProject/CreateProject'


export default function CreatePlan() {

    return (
        <div className='flex [&>*]:border [&>*]:p-4 [&>*]:rounded-sm [&>*]:max-w-[50%] flex-wrap'>
            <CreateProject />
            <Recomendation />
            <MarkersValue />
            <VacanciesReady />
        </div>
    )
}
