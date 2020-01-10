import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './Navbar.css'
import Home from './Home'
import About from './About'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div class='Navbar'>
      <div class='Navlinks'>
        <nav>
          <Link className='navlink' to='/'>
            Home
          </Link>
          <Link className='navlink' to='/about'>
            About
          </Link>
          <Link className='navlink' to='/menu'>
            Menu
          </Link>
          <Link className='navlink' to='/login'>
            Catering
          </Link>
          <Link className='navlink' to='/signup'>
            Contact us
          </Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s anda
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/signup'>{/* <Signup /> */}</Route>
          <Route path='/login'>{/* <Login /> */}</Route>
          <Route path='/menu' component={Menu} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default Navbar
