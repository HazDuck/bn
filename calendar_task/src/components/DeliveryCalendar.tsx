import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Props {
  setDate: any
}

const DeliveryCalendar = ({ setDate }: Props) : JSX.Element => {
  return (  
    <Calendar onChange={setDate}/>
  )
}

export default DeliveryCalendar