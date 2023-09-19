import React from 'react';

export function BtnSm({ children }) {
  return <button type="button" className="btn btn-sm">{children}</button>;
}

export function BtnMed({ children }) {
  return <button type="button" className="btn btn-sm">{children}</button>;
}

export function BtnTxt({ children }) {
  return <button type="button" className="btn btn-sm">{children}</button>;
}

export function BtnInv({ children }) {
  return <button type="button" className="border-2 border-main-medium rounded text-center px-3 py-2 flex items-center hover:bg-main-medium hover:text-white-medium transition-all delay-75 active:-translate-y-1 hover:ring-0">{children}</button>;
}

export function BtnInvSm({ children }) {
  return <button type="button" className="border-2 border-main-medium rounded-full text-center px-[25%] py-2 flex items-center hover:bg-main-medium hover:text-white-medium transition-all delay-75 active:-translate-y-1 hover:ring-0">{children}</button>;
}
