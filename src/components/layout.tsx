import * as React from 'react';
import Header from '../header/Header';

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout'>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}