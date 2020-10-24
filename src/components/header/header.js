import React from 'react';
import'./header.scss';
import {Link,NavLink} from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1> RESTy</h1>
        <nav className='nav'>
        <ul className = "ulHeader">
        <li>
            <Link data-testid="home" to="/">Home</Link>
          </li>
            <li>
              <NavLink data-testid="history" to="/history" >History</NavLink>
            </li>
            <li>
              <NavLink   data-testid="help"to="/help" >Help</NavLink>
            </li>
        </ul>
      </nav>
      </header>
    )
  };

export default Header;