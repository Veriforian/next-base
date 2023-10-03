import React from 'react';

export function HeaderSection({ title, className = '' }) {
  return (

    <h2 className={`${className} text-3xl font-bold ml-6 w-[40%] text-main-light relative before:transition-all hover:before:w-[90%] before:absolute before:right-3 before:bottom-1 before:h-[2px] before:bg-main-medium before:opacity-[50%] before:w-[75%]`}>{title}</h2>

  );
}

export function HeaderText({ title }) {
  return (
    <h2 className="text-4xl font-bold text-center text-main-light">{title}</h2>
  );
}
