'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SlMenu } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';

import './navbar.css';
import Logo from '../../public/icons/placeholder.svg';
import { BtnInv, BtnInvSm } from './buttons';

function NavLinkSm({ href, text, onClick }) {
  return (
    <a
      className="hover:text-main-medium transition-all delay-100 text-xl pb-2 pt-2"
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
function NavLink({ href, text }) {
  return (
    <a className="hover:text-main-medium transition-all delay-100" href={href}>
      {text}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const refOpen = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    if (open) {
      refOpen.current?.classList.add('closed');
      refOpen.current?.classList.remove('open');
      refClose.current?.classList.add('open');
      refClose.current?.classList.remove('closed');
    } else {
      refOpen.current?.classList.add('open');
      refOpen.current?.classList.remove('closed');
      refClose.current?.classList.add('closed');
      refClose.current?.classList.remove('open');
    }
  }, [open]);

  return (
    <nav className="flex justify-between px-4 py-2 w-full relative">
      <a className="lg:hidden" href="/" aria-label="home">
        <Logo className="fill-main-medium " />
      </a>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden relative z-10 text-[2.2rem] text-main-medium drop-shadow-sm m-3"
      >
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          ref={refOpen}
        >
          <SlMenu />
        </div>
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] closed"
          ref={refClose}
        >
          <TfiClose />
        </div>
      </button>
      {/* Nav for mobile */}
      <div
        id="nav-menu"
        className="lg:hidden justify-center absolute pt-12 flex items-center w-[100%] left-[50%] translate-x-[-50%]"
      >
        <div
          className={`flex flex-col w-full items-center bg-white-medium ${
            open ? 'down' : 'up'
          }`}
        >
          <NavLinkSm href="/" text="Home" onClick={() => setOpen(false)} />
          <hr className="w-[80%] text-black-light" />
          <NavLinkSm
            href="/about"
            text="About"
            onClick={() => setOpen(false)}
          />
          <hr className="w-[80%] text-black-light" />
          <NavLinkSm
            href="/contact"
            text="Contact"
            onClick={() => setOpen(false)}
          />
          <hr className="w-[80%] text-black-light pb-2" />
          <BtnInvSm>
            <a href="/#quote" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </BtnInvSm>
        </div>
      </div>
      <div className="hidden lg:flex relative top items-center justify-center tem p-4 w-full text-lg">
        <div className="flex-1 flex justify-around basis-2/6">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
        </div>
        <div className="flex-1 basis-3/6 flex justify-center">
          <a href="/" className="hidden lg:block">
            <Logo className="fill-main-medium " />
          </a>
        </div>
        <div className="flex-1 flex justify-around items-center basis-2/6">
          <NavLink href="/contact" text="Contact" />
          <BtnInv>
            <a href="/#quote">Get Started</a>
          </BtnInv>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
