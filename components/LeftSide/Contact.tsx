import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
      <p className="">Has my portfolio piqued your interest? If so, you can contact me at
             <Link className="underline px-2"
                href="mailto:elsahvy@gmail.com"
              >
               elsahvy@gmail.com.
              </Link>
              Looking forward to hearing from you!
               </p>
    </>
  )
}

export default Contact