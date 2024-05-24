import { User, Sun, Moon } from "./Icons"
import Image from "next/image"
import multishop from '@p/Logo Sistema Multishop Pequeno.png'

export default function Navbar() {
  return(
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="circle">
          <User />
        </div>
        <Image className='img2' src={multishop} alt='logo multishop' priority />
      </div>
      <div className="mood">
        <button className="mood-btn">
          <Sun />
          <div className="circle2"></div>
          <Moon />
        </button>
      </div>
    </nav>
  )
}