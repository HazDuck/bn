import Calendar from 'react-calendar';
import  { Dispatch, SetStateAction } from 'react';
import 'react-calendar/dist/Calendar.css';

interface Props {
  setDate: any,
  setShowCalendar: Dispatch<SetStateAction<boolean>>,
}

const DeliveryCalendar = ({ setDate, setShowCalendar }: Props) : JSX.Element => {
  return (  
    <>
      <div className='container'>
        <div className='modal' onClick={() => setShowCalendar(false)}/>
        <div className='calendar-container'>
          <Calendar 
            onChange={setDate}
            tileDisabled={({date}) => date.getDay() === 2 || date.getDay() === 5 || date.getDay() === 6}
          />
        </div>
      </div>
    </>
  )
}

export default DeliveryCalendar