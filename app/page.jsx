import React from 'react';

import { Navbar } from './components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <section>Section 1</section>
      <section>Section 2</section>
    </main>
  );
}
