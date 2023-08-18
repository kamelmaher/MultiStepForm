import { useAppSelector } from '../store/store';
import AddOns from './Form/AddOns';
import Finishing from './Form/Finishing';
import PersonalForm from './Form/PersonalForm';
import SelectPlan from './Form/SelectPlan/SelectPlan';
import Summary from './Form/Summary';

function Form() {
    const show = useAppSelector(show => show.show.show)
    return (
        <div className='w-75'>
            {show == 1 ? <PersonalForm /> 
            :
            show == 2 ? <SelectPlan /> 
            :
            show == 3 ? <AddOns /> 
            :
            show == 4 ? <Summary /> 
            :
            show == 5 ? <Finishing /> : null}
        </div>
    )
}

export default Form
