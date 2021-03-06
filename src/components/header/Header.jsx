import React from 'react'
import './header.min.css'
import CTA from './CTA'
import ME from '../../assets/img/guy.png'
import Socials from '../socials/Socials'
import Logo from '../../assets/img/guy_txt.png'

const Header = () => {
  return (
    <header id="home">
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <img src={Logo} alt="GUY" className="header__logo"/>
            <h1>G U Y</h1>
            <h5 className="text-light">A Frontend Developer</h5>
            <CTA/>
            <Socials/>

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header