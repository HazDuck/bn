import CalendarImg from '../assets/calendar.svg'
import VanImg from '../assets/van.svg'
import  {Dispatch, SetStateAction, useEffect, useState} from 'react';

interface Props {
  showCalendar: boolean, 
  setShowCalendar: Dispatch<SetStateAction<boolean>>
  date: any
}

const Delivery = ({showCalendar, setShowCalendar, date}: Props) : JSX.Element => {

  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    const formatDate = date.toLocaleDateString("en-GB", {month: "long", weekday: "long", day: "numeric" })
    setFormattedDate(formatDate)
  }, [date])

  return (
    <div className="delivery">
      <h1 className="heading">Choose your delivery day<span className="heading--sticker">Delivery is always free</span></h1>
      <div className="info-bar">
        <div className="info-bar--content-container">
          <p className="info-bar--date">{formattedDate}</p>
          <div className="info-bar--sticker">
            <img src={VanImg} alt="Van" />
            <p>Earliest delivery</p>
          </div>

        </div>
        <button className="info-bar--button" onClick={() => setShowCalendar(!showCalendar)}>
          <img src={CalendarImg} alt="Calendar" />
          <p className="info-bar--button__text">Change</p>
        </button>
      </div>
    </div>
  )
}

export default Delivery