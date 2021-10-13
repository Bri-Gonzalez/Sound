import './Footer.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className='link' to='/add-product'>
      Sell Product
    </NavLink>
    <NavLink className='link' to='/sign-out'>
      Sign Out
    </NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className='link' to='/sign-up'>
      Sign Up
    </NavLink>
    <NavLink className='link' to='/sign-in'>
      Sign In
    </NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className='link' to='/products'>
      Products
    </NavLink>
  </>
)

export default function Footer({ user }) {
  return (
    <div className='footer'>
      <div className='team-container'>
        <p><b>The Team</b></p>
        <a href='https://github.com/MoldirShabikova'>Moldir Shabikova</a>
        <a href='https://github.com/MrWil95'>Alex Wilbur</a>
        <a href='https://github.com/Bri-Gonzalez'>Briana Gonzalez</a>
      </div>
      <div className='made-by-devs'>
        <p><b>Made by Developers</b></p>
        <div className='footer-imgs'>
          <img
            className='footer-logo'
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1633966668/SOUND/sound_vivbtp.png'
            alt='logo'
          />
          <a href='https://github.com/Bri-Gonzalez/Sound'>
            <img
              className='footer-github'
              src='https://res.cloudinary.com/dfryxohde/image/upload/v1633722394/SOUND/githubiconwhite_rgvasr.png'
              alt='github-logo'
            />
          </a>
        </div>
      </div>
      <div className='sitemap'>
        <p><b>Sitemap</b></p>
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div>
  )
}
