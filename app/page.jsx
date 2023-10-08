import React from 'react';

import { Navbar, Landing } from './components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white-medium text-black-medium">
      <Navbar />
      <Landing.Hero />
      <Landing.WhyUs />
      <Landing.Testimonials />
    </main>
  );
}
