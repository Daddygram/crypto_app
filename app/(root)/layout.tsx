import Footer from '@/components/Footer'
import Hamburger from '@/components/Hamburger'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ( {children}: { children: React.ReactNode } ) => {
  return (
    <>
        <Navbar />
        <Hamburger />
        {children}
        <Footer />
    </>
  )
}

export default layout