import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div> 
          <nav className="px-5 2xl:pt-0 md:pt-[50px]"> 
            <h1 className="text-black 2xl:text-[105px] md:text-6xl text-5xl py-5">
              Laughing Coyote Dev
            </h1>
          <div className="flex flex-col border-black border-y-2 pl-5 text-2xl py-5 mr-5 l text-onyx justify-start">
              <Link href="/#about-section">About</Link>
              <Link href="/#services-section">Services</Link>
              <Link href="/#contact-section">Contact</Link>
              <a href="/#right-side" className="md:hidden block">
                Featured Works
              </a>
            </div>
          </nav>
       </div>
    </div>
  )
}

export default Header