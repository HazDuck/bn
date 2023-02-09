import { useState } from 'react'
import Calendar from './components/Calendar'
import Delivery from './components/Delivery'

const App = () => {

  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  return (
    <>
      <Delivery showCalendar={showCalendar} setShowCalendar={setShowCalendar}/>
      {showCalendar ? <Calendar /> : null}
    </>
  )
}

export default App
