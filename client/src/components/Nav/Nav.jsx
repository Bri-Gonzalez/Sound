import './Nav.css'
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
export default function Nav({ user }) {
  return (
    <nav>
      <div className='nav'>
        <NavLink className='logo' to='/'>
          <img
            src='https://res.cloudinary.com/dfryxohde/image/upload/v1633966668/SOUND/sound_vivbtp.png'
            alt='sound-logo'
          />
        </NavLink>
        <div className='links'>
          {user && (
            <div className='link welcome'>Welcome, {user.firstname} </div>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
