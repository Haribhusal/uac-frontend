// components/layout.js
import React, { useEffect } from 'react'
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {


  return (
    <>

      {/* <NewHeader /> */}
      <Header />
      <main className='relative' style={{ minHeight: '100vh' }}>

        {children}

      </main>
      <Footer />
    </>
  );
}
