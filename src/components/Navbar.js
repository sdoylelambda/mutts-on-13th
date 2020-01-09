import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>FAQ</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/about'>{/* <About /> */}</Route>
        <Route path='/Signup'>{/* <Signup /> */}</Route>
        <Route path='/Login'>{/* <Login /> */}</Route>
        <Route path='/FAQ'>{/* <FAQ /> */}</Route>
        <Route path='/'>{/* <Home /> */}</Route>
      </Switch>
    </div>
  )
}

export default Navbar
