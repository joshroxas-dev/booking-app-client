import React, { useState } from 'react'

import CalendarComponent from '../components/CalendarComponent'

const Unit = ({ location, getUnits }) => {
  const [calendarVisibility, setCalendarVisiblity] = useState(false)

  const showCalendar = () => {
    console.log('calendar visible')
    setCalendarVisiblity(!calendarVisibility)
  }
  return (
    <div
      style={{ backgroundColor: '#f4f4f4', color: '#35363A' }}
      className='p-2 mt-3 shadow-lg rounded'
    >
      <div className='' style={{ height: 350 }}>
        <div
          className='bg-image rounded w-100 h-100'
          style={{
            backgroundImage: `url(${location.img})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        ></div>
      </div>
      <div>
        <h3>{location.name}</h3>
        <h5>{location.location}</h5>
        <div className="text-center">
        <button className='btn btn-primary mb-2 mt-4' onClick={() => showCalendar()}>
          Show Calendar
        </button>
        </div>
        {calendarVisibility && (
          <CalendarComponent bookedDates={location.bookedDates} id={location._id} getUnits={() => getUnits()} />
        )}
      </div>
    </div>
  )
}

export default Unit
