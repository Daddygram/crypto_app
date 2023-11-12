import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-center body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12'>
      <div className='flex gap-x-9'>
        <p>privacy</p>
        <p>Terms of Use</p>
      </div>
    </footer>
  )
}

export default Footer