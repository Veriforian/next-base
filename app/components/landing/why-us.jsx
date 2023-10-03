import React from 'react';

import './why-us.css';
import { HeaderSection } from '../reusable';
import { BtnMed } from '../buttons';

function WhyCard({ title, text }) {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-light-medium p-10 text-white-medium text-center ">
      <h4 className="text-lg font-bold">{title}</h4>
      <p>
        {text}
      </p>
    </div>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="w-full">
      <div className="flex flex-col py-4 px-2 bg-gradient-to-b from-main-light to-main-dark w-full m-auto">
        <HeaderSection title="Why us" className="text-white-medium before:bg-white-medium" />
        <div className="mt-5 w-full flex flex-col">
          <BtnMed id="response" className="w-[50%] mt-1 bg-white-medium hover:bg-light-medium  hover:w-full shadow-md"><a href="#response" className="">Quick Response</a></BtnMed>
          <BtnMed id="certified" className="w-[50%] mt-1 bg-white-medium self-end text-right hover:bg-light-medium border-white-medium hover:w-full shadow-md"><a href="#certified" className="w-full">Certified</a></BtnMed>
          <BtnMed id="experienced" className="w-[50%] mt-1 bg-white-medium hover:bg-light-medium border-white-medium hover:w-full shadow-md"><a href="#experienced">Experienced</a></BtnMed>
        </div>
      </div>

      <div><WhyCard title="Yes" text="kisafsdfasdf" /></div>
    </section>
  );
}

export default WhyUs;
