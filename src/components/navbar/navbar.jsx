import React from 'react'
import SearchBar from '../searchBar/searchBar'
import LoginButton from '../loginButton/loginButton'
import { useLocation, useNavigate } from 'react-router-dom'
import CartButton from '../cartButton/cartButton'
import './navbar.scss'

export default function Navbar() {

  const location = useLocation()

  const navigate = useNavigate()

  const navigateToPage = (e) => {
    const redirect = e.target.getAttribute('link');
    navigate(redirect);
  }

  return (
    <div className='navbar-container-main w-100 flex-start-center'>
      <div className='navbar-container w-100 flex-between-center'>
        <h1 className='logo'>ADEPOS</h1>
        <div className='flex-start-center'>
          <div className='navigation-container flex-start-center ml-2 mr-2'>
            <li link='home' onClick={navigateToPage} className={`navigation-links mr-2 ${location.pathname.includes('home') ? 'active-navigation' : ''}`}>Home</li>
            <li link='menu' onClick={navigateToPage} className={`navigation-links mr-2 ${location.pathname.includes('menu') ? 'active-navigation' : ''}`}>Menu</li>
            <li link='offers' onClick={navigateToPage} className={`navigation-links mr-2 ${location.pathname.includes('offers') ? 'active-navigation' : ''}`}>Offers</li>
          </div>
          <SearchBar placeholder={'Search'} />
          <CartButton />
          <LoginButton />
        </div>
      </div>
    </div>
  )
}