import Image from 'next/image'
import React from 'react'
import Img1 from '../public/screenshots/lc.png'
import Img2 from '../public/screenshots/roof.png'
import Img3 from '../public/screenshots/rq.png'
import Img4 from '../public/screenshots/wtbh.png'
import Link from 'next/link'

const posts = [
  {
    title: 'mindmap test1',
    image: Img1,
    url: 'http://google.com'
  },
  {
    title: 'mindmap tes21',
    image: Img2,
    url: 'http://google.com'
  },
  {
    title: 'mindmap test1',
    image: Img3,
    url: 'http://google.com'
  },
  {
    title: 'mindmap tes21',
    image: Img4,
    url: 'http://google.com'
  },
]

//todo: ADD CREATIVE PROJECTS FILTER BTNS

const CreativeProjects = () => {
  return (
    <div className="m-5 pt-[50px] pl-3 pr-[10px]">
      <div className="">
      <div className="mb-5 pt-2">
      <ul className="text-aquamarine flex space-x-4">
        <li className="bg-onyx border border-black px-3 py-1 rounded">All Featured Sites</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">Writing to Better Health</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">Laughing Coyote Dev</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">HoveyRoofing</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">The Running Quail</li>
      </ul>
      {/* <ul className="flex space-x-4">
        <li className="bg-test1 border border-black px-3 py-1 rounded">Illustrative mindmaps</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Coding Projects</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Blog</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Newsletter</li>
      </ul> */}
        </div>
        </div>
      <h2 className="pt-5 mt-[35px]  text-4xl underline ml-3">Writing to Better Health</h2>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda iusto, harum optio molestias enim blanditiis. Quos iusto illo sit eos repudiandae fuga eveniet, aspernatur vitae delectus explicabo corrupti nesciunt.</p>
    <div className="grid grid-cols-2 gap-y-10 gap-x-10">
      {posts.map((item, index) => (
        <div className="" key={index}>
           <Link href={item.url}>
              <Image className="h-[300px] rounded drop-shadow-lg border border-black"
                    src={item.image}
                      alt={item.title}
                        // width={1050}
                        height={850}
                          />
                 </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CreativeProjects