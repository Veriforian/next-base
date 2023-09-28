import React from 'react';

export function BtnSm({ children, className }) {
  return <button type="button" className={`${className} bg-main-medium px-4 py-2 rounded-sm relative text-white-medium hover:text-main-medium hover:border-main-medium hover:border-solid hover:border-2 hover:bg-opacity-0 transition-all duration-75`}>{children}</button>;
}

export function BtnMed({ children, className }) {
  return <button type="button" className={`${className}`}>{children}</button>;
}

export function BtnTxt({ children, className }) {
  return <button type="button" className={`${className} transition-all duration-75 `}>{children}</button>;
}

export function BtnInv({ children, className }) {
  return <button type="button" className={`${className} border-2 border-main-medium rounded text-center px-3 py-2 flex items-center hover:bg-main-medium hover:text-white-medium transition-all delay-75 active:-translate-y-1 hover:ring-0`}>{children}</button>;
}

export function BtnInvSm({ children, className }) {
  return <button type="button" className={`${className} border-2 border-main-medium rounded-full text-center px-[25%] py-2 flex items-center hover:bg-main-medium hover:text-white-medium transition-all active:-translate-y-1 hover:ring-0`}>{children}</button>;
}
