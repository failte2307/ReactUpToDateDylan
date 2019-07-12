import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
  render() {
    return (
      <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <ul className='navbar-nav'>
          <li className='nav-link'><Link to='/'>Home</Link></li>
        </ul>
        {/*<ul className='navbar-nav navbar-collapse justify-content-end'>
          <li className='nav-link'><Link to='/'>Login</Link></li>
          <li className='nav-link'><Link to='/'>Logout</Link></li>
        </ul>*/}
      </nav>
    </header>
    )
  }
}

export default HeaderComponent
