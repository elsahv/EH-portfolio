import Image from 'next/image'
import Img1 from '../public/screenshots/lc.png'
import Img2 from '../public/screenshots/roof.png'
import Img3 from '../public/screenshots/rq.png'
import Img4 from '../public/screenshots/wtbh.png'
import Link from 'next/link'
import { MdFileOpen } from "react-icons/md";

const posts = [
  {
    title: 'Laughing Coyote',
    image: Img1,
    url: 'http://google.com'
  },
  {
    title: 'Hovey Roofing',
    image: Img2,
    url: 'http://google.com'
  },
  {
    title: 'The Running Quail',
      image: Img3,
      url: 'http://google.com'
  },
  {
    title: 'Writing to Better Health',
    image: Img4,
    url: 'http://google.com'
  },
]

//todo: ADD CREATIVE PROJECTS FILTER BTNS

const Grid = () => {
  return (
    <div className="m-5 pl-3 pr-[10px]">
      <div className="mb-5 pt-2">
      {/* <ul className="text-aquamarine flex space-x-4">
        <li className="bg-onyx border border-black px-3 py-1 rounded">All Featured Sites</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">Writing to Better Health</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">Laughing Coyote Dev</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">HoveyRoofing</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">The Running Quail</li>
      </ul> */}
      {/* <ul className="flex space-x-4">
        <li className="bg-test1 border border-black px-3 py-1 rounded">Illustrative mindmaps</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Coding Projects</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Blog</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Newsletter</li>
      </ul> */}
        </div>
      <h2 className="pt-5 text-4xl underline ml-3">Featured Projects</h2>
      <p className="mb-5">Listed below are some featured website projects. Click on each image to view website</p>
    <div className="grid grid-cols-2 gap-y-8 gap-x-10">
      {posts.map((item, index) => (
        <div className="w-[530px]" key={index}>
           <Link className="hover:text-aquamarine hover:opacity-80" href={item.url}>
         <div className="flex items-center ">
            <h2 className="text-lg pt-5">{item.title}</h2>
            </div>
              <Image className="h-[300px] rounded drop-shadow-lg border border-black"
                    src={item.image}
                      alt={item.title}
                        // width={1050}
                        // height={850}
                          />
                 </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Grid