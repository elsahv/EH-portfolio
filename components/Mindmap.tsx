import Image from 'next/image'
import React from 'react'

import Img from '../public/filler/four.jpg'
import Img1 from '../public/filler/four.jpg'
import Link from 'next/link'

const posts = [
  {
    title: 'mindmap test1',
    image: Img1,
    url: 'http://google.com'
  },
  {
    title: 'mindmap tes21',
    image: Img,
    url: 'http://google.com'
  },
  {
    title: 'mindmap test1',
    image: Img1,
    url: 'http://google.com'
  },
  {
    title: 'mindmap tes21',
    image: Img,
    url: 'http://google.com'
  },
]

const Mindmap = () => {
  return (
    <div className="pl-3 pr-[150px]">
      <h2 className="text-4xl underline ml-3 mb-5">Mindmaps</h2>
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {posts.map((item, index) => (
        <div className="" key={index}>
           <Link href={item.url}>
              <Image className="drop-shadow-lg border-2 border-black"
                    src={item.image}
                      alt={item.title}
                        width={1050}
                        height={750}
                          />
                 </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Mindmap