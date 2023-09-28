import React from 'react';
import { PiArrowRightThin } from 'react-icons/pi';

import './hero.css';
import { BtnSm, BtnTxt } from '../buttons';

function SectionLeftTop() {
  return (
    <div className="flex flex-col items-center justify-start h-[25vh] w-full">
      <h1 className="text-5xl font-bold text-center text-main-light">
        Welcome to the
        {' '}
        <span className=" text-dark-medium">landing</span>
        {' '}
        page
      </h1>
      <p className="text-xl pt-5 text-[1.2rem] w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-5 flex justify-center items-center ">
        <BtnSm><a href="#quote">Get Started</a></BtnSm>
        <div className=" w-10" />
        <BtnTxt className="group hover:text-main-dark">
          <a href="#wow" className="flex">
            Why us
            {' '}
            <PiArrowRightThin className="text-xl translate-x-1 group-hover:translate-x-2 transition-all duration-[50ms]" />
          </a>
        </BtnTxt>

      </div>
    </div>
  );
}

function SectionRightBotton() {
  return (
    <div className="hero-right flex flex-col items-center justify-end h-[25vh] w-full rounded-sm mt-10">
      <h1 className="text-5xl font-bold text-center text-main-light">
        Welcome to the
        {' '}
        <span className=" text-dark-medium">landing</span>
        {' '}
        page
      </h1>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="mt-20 px-6 flex flex-col items-center">
      <SectionLeftTop />
      <SectionRightBotton />
    </section>
  );
}

export default Hero;
