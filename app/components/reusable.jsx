import React from 'react';

export function HeaderSection({ title }) {
  return (

    <h2 className="text-4xl font-bold ml-6 w-[40%] text-main-light relative before:transition-all hover:before:w-[90%] before:absolute before:right-2 before:bottom-0 before:h-1 before:bg-main-medium before:opacity-[50%] before:w-[75%]">{title}</h2>

  );
}

export function HeaderText({ title }) {
  return (

    <h2 className="text-4xl font-bold text-center text-main-light">{title}</h2>

  );
}
