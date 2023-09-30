import React from 'react';
import { PiArrowRightThin } from 'react-icons/pi';

import './hero.css';
import { BtnSm, BtnTxt } from '../buttons';

function SectionLeftTop() {
  return (
    <div className="flex flex-col justify-start w-full">
      <h1 className="text-5xl font-bold  text-main-light">
        Welcome to the
        {' '}
        <span className=" text-dark-medium">landing</span>
        {' '}
        page
      </h1>
      <p className="text-xl pt-5 text-[1.2rem] w-[100%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-10 flex items-center ">
        <BtnSm>
          <a href="#quote">Get Started</a>
        </BtnSm>
        <div className=" w-10" />
        <BtnTxt className="group hover:text-main-dark">
          <a href="#why-us" className="flex">
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
    <div className="hero-right flex flex-col items-center justify-end w-full rounded-sm mt-14 px-10 py-20">
      <article className="flex flex-col items-center justify-center w-full bg-light-medium rounded-md p-10 text-white-medium text-center ">
        <h4 className="text-lg font-bold">You need us</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          qui fugit odit ipsa laborum dicta consectetur. Quos tempora nobis ipsa
          officia nemo, dicta, dignissimos ea earum magni repudiandae
          perferendis aliquid?
        </p>
      </article>
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
