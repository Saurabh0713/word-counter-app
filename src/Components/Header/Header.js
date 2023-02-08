import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  // const [pickedColor,setPickedColor] = useState("white")
  // const handleThemeClick3=()=>{
  //   setPickedColor("#8D021F")
  //   console.log(pickedColor)
  //   document.body.style.backgroundColor = pickedColor
  // }
  // document.body.style.backgroundColor = pickedColor
 
  const handleThemeClick=(event)=>{
    let color = event.target.value
    console.log(color)
    document.body.style.backgroundColor = color
  }

  return (
    <div>
{/* <!-- As a heading --> */}
<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid d-flex justify-content-between">
    <div>
    <span className="navbar-brand mb-0 h1">TEXTUTILS-React</span>
    <NavLink className="navbar-brand" to="/">Home</NavLink>
    <NavLink className="navbar-brand" to="/about">About Us</NavLink>
    </div>
  <div className="d-flex">
  <div className="dropdown mx-3">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select theme
  </button>
  <ul className="dropdown-menu p-0">
    <li className="dropdown-item bg-success"><button className='btn text-light w-100' value="#004225" onClick={handleThemeClick}>British Racing</button></li>
    <li className="dropdown-item bg-primary"><button className='btn text-light w-100' value="#0F4C81" onClick={handleThemeClick}>Classic Blue</button></li>
    <li className="dropdown-item bg-danger"><button className='btn text-light w-100' value="#8D021F" onClick={handleThemeClick}>Burgundy</button></li>
  </ul>
</div>
  <button className={`btn darkModeBtn btn-${props.btnmode}`} onClick={props.handleMode}>{props.enablemode}</button>
  </div>
  </div>
</nav>

{/* <!-- As a link --> */}
{/* <nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar heading</span>
  </div>
</nav> */}
    </div>
  )
}
