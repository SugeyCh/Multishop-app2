import Navbar from './Navbar'
import { Dash, Search } from './Icons'
import { useState } from "react"
import { addDays } from "date-fns"
import { DateRange, DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

export default function Dashboard() {
  const initialRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  }

  const [isOpen, setIsOpen] = useState(false)
  const [range, setRange] = useState(initialRange)

  const handleCalendarClick = () => {
    setIsOpen(!isOpen)
  }

  const handleDaySelection = (selectedRange) => {
    setRange(selectedRange)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="dash">
        <Navbar />
        <div className="dash-content-title">
          <div className='title'>
            <Dash />
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className='dash-content'>
          <div className='search'>
            <span className='search-date'>Busca tu venta por fecha</span>
            <div className='btns'>
              <button className='button-calendar' onClick={handleCalendarClick}>
                Seleccionar fecha
              </button>
              <button className='button-search'>
                <Search />
                <span>Buscar</span>
              </button>
            </div>
            {isOpen && (
              <div className="modal">
                <div className="modal-content">
                  <button className="close-button" onClick={closeModal}>×</button>
                  <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={handleDaySelection}
                  />
                </div>
              </div>
            )}
          </div>

          <div className='dash-graph'></div>
          <div className='ventas'>
            <div className='venta1'>
              <div className='circle-mayor'></div>
              <span>Mayores ventas</span>
            </div>
            <div className='venta2'>
              <div className='circle-menor'></div>
              <span>Menores ventas</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}