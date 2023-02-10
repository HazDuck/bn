import { useState } from 'react'
import DeliveryCalendar from './components/DeliveryCalendar'
import DeliveryInfo from './components/DeliveryInfo'

const App = () => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  const [date, setDate] = useState(new Date())
  
  return (
    <>
      {showCalendar ? (
        <DeliveryCalendar 
          setDate={setDate} 
          setShowCalendar={setShowCalendar}/>
        ) : (
        <DeliveryInfo 
          showCalendar={showCalendar} 
          setShowCalendar={setShowCalendar} 
          date={date} />
        )
      }
    </>
  )
}

export default App
