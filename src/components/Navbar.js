import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Navbar.css'
import Home from './Home'
import About from './About'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div class='Navbar'>
      <div class='Navlinks'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/login'>Catering</Link>
          <Link to='/signup'>Contact us</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/signup'>{/* <Signup /> */}</Route>
          <Route path='/login'>{/* <Login /> */}</Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Navbar
