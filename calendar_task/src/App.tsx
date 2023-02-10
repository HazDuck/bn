import { useEffect, useState } from 'react'
import DeliveryCalendar from './components/DeliveryCalendar'
import Delivery from './components/Delivery'

const App = () => {

  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    console.log(date.getMonth())
  }, [date])
  
  return (
    <>
      <Delivery showCalendar={showCalendar} setShowCalendar={setShowCalendar} date={date} />
      {showCalendar ? <DeliveryCalendar setDate={setDate}/> : null}
    </>
  )
}

export default App
