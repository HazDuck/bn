import CalendarImg from '../assets/calendar.svg'
import VanImg from '../assets/van.svg'

const Delivery = () => {
  return (
    <div className="delivery">
      <h1 className="heading">Choose your delivery day<span className="heading--sticker">Delivery is always free</span></h1>
      <div className="info-bar">
        <div className="info-bar--content-container">
          <p className="info-bar--date">Date</p>
          <div className="info-bar--sticker">
            <img src={VanImg} alt="Van" />
            <p>Earliest delivery</p>
          </div>

        </div>
        <button className="info-bar--button">
          <img src={CalendarImg} alt="Calendar" />
          <p className="info-bar--button__text">Change</p>
        </button>
      </div>
    </div>
  )
}

export default Delivery