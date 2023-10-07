'use client';

import React, { useState } from 'react';

import './why-us.css';
import { HeaderSection } from '../reusable';
import { BtnMed } from '../buttons';

function WhyCard({
  id, title, className, children, open,
}) {
  return (
    <div
      id={id}
      className={`${className} ${open ? 'h-auto p-10' : 'p-0 h-[0px]'} flex flex-col items-center justify-center w-full bg-cover text-white-medium text-center  transition-all delay-75 duration-200`}
    >
      <div className={`${open ? 'block' : 'hidden'} bg-gradient-to-t from-opaque-dark to-opaque-dark py-2 rounded-lg `}>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="mt-2">
          {children}
        </p>
      </div>
    </div>
  );
}

function WhyUs() {
  const [response, setResponse] = useState(false);
  const [certified, setCertified] = useState(false);
  const [experienced, setExperienced] = useState(false);

  return (
    <section id="why-us" className="w-full">
      <div className="flex flex-col py-4 px-2 bg-gradient-to-b from-main-light to-main-dark w-full m-auto">
        <HeaderSection
          title="Why us"
          className="text-white-medium before:bg-white-medium"
        />
        <fieldset id="whyRadio">
          <div className="mt-5 w-full flex flex-col">
            <input
              aria-label="response button"
              type="radio"
              name="whyRadio"
              id="why-response"
              className="peer/response hidden"
            />
            <BtnMed
              className="w-[50%] mt-1 bg-white-medium hover:bg-light-medium
          hover:w-full shadow-md self-start peer-checked/response:w-full peer-checked/response:bg-light-medium peer-checked/response:text-white-medium"
            >
              <a href="#response" className="w-full">
                {/* eslint-disable-next-line */}
                <label htmlFor="why-response" className="w-full block text-left" onKeyDown={() => {setCertified(false); setExperienced(false); setResponse(true); }} onClick={() => { setCertified(false); setExperienced(false); setResponse(true); }}>
                  Quick Response
                </label>
              </a>
            </BtnMed>
            <input
              aria-label="response button"
              type="radio"
              name="whyRadio"
              id="certifiedCheck"
              className="peer/certified hidden"
            />
            <BtnMed
              className="w-[50%] mt-1 bg-white-medium self-end text-right hover:bg-light-medium border-white-medium hover:w-full shadow-md peer-checked/certified:w-full peer-checked/certified:bg-light-medium peer-checked/certified:text-white-medium"
            >
              <a href="#certified" className="w-full">
                {/* eslint-disable-next-line */}
                <label htmlFor="certifiedCheck" className="w-full block" onClick={() => {setResponse(false); setExperienced(false); setCertified(true)}} onKeyDown={() => {setResponse(false); setExperienced(false); setCertified(true)}}>
                  Certified
                </label>
              </a>
            </BtnMed>
            <input
              aria-label="response button"
              type="radio"
              name="whyRadio"
              id="experiencedCheck"
              className="peer/experienced hidden"
            />
            <BtnMed
              className="w-[50%] mt-1 bg-white-medium hover:bg-light-medium border-white-medium hover:w-full shadow-md text-left peer-checked/experienced:w-full peer-checked/experienced:bg-light-medium peer-checked/experienced:text-white-medium"
            >
              <a href="#experienced" className="w-full">
                {/* eslint-disable-next-line */}
                <label htmlFor="experiencedCheck" className="w-full block text-left" onKeyDown={() => {setResponse(false); setCertified(false); setExperienced(true)}} onClick={() => {setResponse(false); setCertified(false); setExperienced(true)}}>
                  Experienced
                </label>
              </a>
            </BtnMed>
          </div>
        </fieldset>
      </div>

      <div>
        <WhyCard title="Quick responses" id="response" className=" bg-[url('/images/response.jpg')] " open={response}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          possimus sit aliquam, facere id rerum quos iste sint quas. Magnam
          dolore aliquam voluptates amet, eaque quasi ducimus porro omnis
          repellat.
        </WhyCard>
        <WhyCard title="Certified" id="certified" className=" bg-[url('/images/certified.jpg')]" open={certified}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          possimus sit aliquam, facere id rerum quos iste sint quas. Magnam
          dolore aliquam voluptates amet, eaque quasi ducimus porro omnis
          repellat.
        </WhyCard>
        <WhyCard title="Experienced" id="experienced" className=" bg-[url('/images/experienced.jpg')]" open={experienced}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          possimus sit aliquam, facere id rerum quos iste sint quas. Magnam
          dolore aliquam voluptates amet, eaque quasi ducimus porro omnis
          repellat.
        </WhyCard>
      </div>
    </section>
  );
}

export default WhyUs;
