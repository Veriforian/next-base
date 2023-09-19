import React from 'react';
import { BtnSm, BtnTxt } from '../buttons';

function Hero() {
  return (
    <section id="hero" className="mt-20 px-6 flex flex-col items-center">
      <div className="flex flex-col items-center justify-start h-[25vh] w-full">
        <h1 className="text-5xl font-bold text-center text-main-light">
          Welcome to the
          {' '}
          <span className=" text-dark-medium">landing</span>
          {' '}
          page
        </h1>
        <p className="text-xl pt-5 text-[1.2rem] w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="">
          <BtnSm>Get Started</BtnSm>
          <BtnTxt>Why us</BtnTxt>
        </div>
      </div>
      <figure />
    </section>
  );
}

export default Hero;
