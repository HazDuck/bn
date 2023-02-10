/* eslint-disable react-hooks/exhaustive-deps */
import Calendar from 'react-calendar';
import  { Dispatch, SetStateAction, useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';

interface Props {
  setDate: any,
  setShowCalendar: Dispatch<SetStateAction<boolean>>,
}

const DeliveryCalendar = ({ setDate, setShowCalendar }: Props) : JSX.Element => {
  const [tempDate, setTempDate] = useState(null)
  const [updateDate, setUpdateDate] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (tempDate && updateDate) {
      setDate(tempDate)
      setTempDate(null)
      setUpdateDate(false)
      setShowCalendar(false)
    }
  }, [tempDate, updateDate])

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (  
    <>
      <div className='container'>
        <div className={`modal animate ${animate ? 'start' : ''}`} onClick={() => setShowCalendar(false)}/>
        <div className={`calendar-container animate ${animate ? 'start' : ''}`}>
          <Calendar 
            onChange={(value: any) => setTempDate(value)}
            tileDisabled={({date}) => date.getDay() === 2 || date.getDay() === 5 || date.getDay() === 6}
          />
          <button onClick={() => setShowCalendar(false)}>CANCEL, DONT CHANGE</button>
          <button onClick={() => setUpdateDate(true)}>CHANGE DATE</button>
        </div>
      </div>
    </>
  )
}

export default DeliveryCalendar