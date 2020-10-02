import React from "react";
import { Link } from 'react-router-dom';

import '../header/header.styles.scss';

const Header = () => (
  <header className="mt-5">
    <h1 id="coder">
      <a href="https://arnelimperial.com">Arnel Imperial</a>
    </h1>
    <nav className="header--nav">
      <ul className="header--ul">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='#'>Projects</Link>
        </li>
        <li>
        <Link to='#'>Contact</Link>
        </li>
        <li>
        <Link to='#'>Portal</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;