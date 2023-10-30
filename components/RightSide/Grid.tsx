import Image from 'next/image'
import Img1 from '../../public/screenshots/lc.png'
import Img2 from '../../public/screenshots/roof.png'
import Img3 from '../../public/screenshots/rq.png'
import Img4 from '../../public/screenshots/wtbh.png'
import Link from 'next/link'
import { MdFileOpen } from "react-icons/md";

const posts = [
  {
    // title: 'Laughing Coyote',
    title: 'brochure websites for small businesses',
    image: Img1,
    url: 'http://laughingcoyote.dev'
  },
  {
    title: 'Hovey Roofing',
    image: Img2,
    url: 'http://hoveyroofing.com'
  },
  {
    title: 'The Running Quail- a future social media app for high desert locals and enthusiasts',
      image: Img3,
      url: 'http://therunningquail.com'
  },
  {
    title: 'and Writing to Better Health Future Blog',
    image: Img4,
    url: 'http://writingtobetterhealth.com'
  },
]

//todo: ADD CREATIVE PROJECTS FILTER BTNS

const Grid = () => {
  return (
    <div className="mt-[75px]">

    <div className="">
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
      {/* <h2 className="pt-5 text-4xl underline ml-3">Web Development and Designs</h2> */}
      <h2 className="pt-5 text-4xl underline ml-3">Development and Designs</h2>

      <p className="mb-5">Listed below are some featured website projects. I build...</p>
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 odd:pt-[150px]">
      {posts.map((item, index) => (
        <div className="w-[530px]" key={index}>
           <Link className="hover:text-aquamarine hover:opacity-80 hover:ease-in duration-300" href={item.url}>
         <div className="flex items-center ">
            <h3 className="text-lg pt-5 pl-5">...{item.title}</h3>
            </div>
              <Image className="h-[300px] mb-[50px] rounded drop-shadow-3xl border border-onyx"
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
      </div>
  )
}

export default Grid