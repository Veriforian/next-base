import React from 'react';

import './navbar.css';
import Logo from '../../public/icons/placeholder.svg';
import { BtnInv } from './buttons';

function NavLink({ href, text }) {
  return <a className="hover:text-main-medium transition-all delay-100" href={href}>{text}</a>;
}

function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-2 w-full">
      <a className="" href="/">
        <Logo className="fill-main-medium " />
      </a>
      {/* eslint-disable-next-line */}
      <label htmlFor="burger" id="burger-label">Burger</label>
      <input id="burger" type="checkbox" className="hidden" />
      <div className="absolute lg:relative top flex items-center justify-around p-4 w-full text-lg items">
        <div className="flex-1 flex justify-around basis-2/6">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
        </div>
        <div className="flex-1 basis-3/6 flex justify-center">
          <a href="/" className="hidden">
            <Logo className="fill-main-medium " />
          </a>
        </div>
        <div className="flex-1 flex justify-around items-center basis-2/6">
          <NavLink href="/contact" text="Contact" />
          <BtnInv><a href="/#quote">Get Started</a></BtnInv>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
