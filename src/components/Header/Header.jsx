import { useState } from 'react'
import logo from '/vite.svg'
import './Header.css'


export default function Header() {
  const [now, setNow] = useState(new Date())
    
  setInterval(() => setNow(new Date()),1000)

    return (
      <header>
        <div className="header-flex container">
          <a href="#"><img src={logo} alt={`logo`} /></a>
  
          <span>Время сейчас: { now.toLocaleTimeString() }</span>
        </div>
      </header>
    )
}