import React, {useRef,} from 'react'
import Logo from '../assets/images/logo.svg'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {

  const overlayMenuRef =useRef()
  // console.log(overlayMenuRef.current);

  const navbariAc = ()=> {
    overlayMenuRef.current.classList.add('aktiv')
  }

  const navbariBagla =()=>{
    overlayMenuRef.current.classList.remove('aktiv')
  }
  return (
    <>
    <div className="overlay" ref={overlayMenuRef}>
    <button onClick={navbariBagla}><IoClose /></button>
  <nav className="nav-links">
    <a href="" className='nav-link'>What we do</a>
    <a href=""className='nav-link'>Career</a>
    <a href=""className='nav-link'>Contact</a>
    <a href=""className='nav-link'>Blog</a>
  </nav>
    </div>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
    <button onClick={navbariAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">What we do</Link>
        </li>
        <li className="nav-item">
          <Link className="color nav-link" to="/kariyera">Career</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bizimle-elaqe">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/meqaleler">Blog</Link>
        </li>


      </ul>
    </div>
  </div>
</nav>  
</>
)
}

export default Navbar