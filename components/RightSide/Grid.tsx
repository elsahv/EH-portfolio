import Image from 'next/image'
import Img1 from '../../public/screenshots/lc.png'
import Img2 from '../../public/screenshots/rq.png'
import Img3 from '../../public/screenshots/wtbh.png'
import Link from 'next/link'
import { MdFileOpen } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const posts = [
  {
    // title: 'Laughing Coyote',
    title: 'small businesses',
    image: Img1,
    url: 'http://laughingcoyote.dev',
    p: 'Laughing coyote- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure porro, dolor voluptatem blanditiis t amet consectetur adipisicing elit. Iure porro, dolor voluptatem blanditiis expedita tempora ab',
    github:"https://github.com/elsahv/laughing-coyote-dev"
  },
  {
    title: 'high desert locals and enthusiasts',
      image: Img2,
      url: 'http://therunningquail.com',
      p: 'The Running Quail- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure porro, dolor voluptatem blanditiis t amet consectetur adipisicing elit. Iure porro, dolor voluptatem blanditiis expedita tempora ab',
      github:"https://github.com/elsahv/-the-running-quail"
  },
  {
    title: 'and dietitians/ nutritionists',
    image: Img3,
    url: 'http://writingtobetterhealth.com',
    p: 'Writing to Better Health- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure porro, dolor voluptatem blanditiis t amet consectetur adipisicing elit. Iure porro, dolor voluptatem blanditiis expedita tempora ab',
    github:"https://github.com/elsahv/writing-to-better-health"
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
        <div className="">
      <p className="text-lg">Listed below are some featured websites. These projects are build to assist:</p>
    
    
         </div>
      {/* //*GRID STARTS HERE */}
    <div className="grid grid-cols-1 gap-x-4 gap-y-12">
      {posts.map((item, index) => (
        <div className="rounded dropshadow-lg" key={index}>

            {/* SQ STARTS HERE */}
            <div className="2xl:flex 2xl:flex-row flex-col bg-test2 border border-black rounded-lg">
           <Link className="hover:opacity-80 hover:ease-in duration-300" href={item.url}>
              <Image className="2xl:w-[1250px] 2xl:h-[250px] w-full rounded-tl-lg rounded-bl-lg drop-shadow-3xl border-r border-onyx"
                    src={item.image}
                    alt={item.title}
                    />
                 </Link>
                    <div className="">
            <h3 className="text-lg font-bold pt-5 pl-5">...{item.title}</h3>
            <p className="">{item.p}</p>
                      <>
                                <div id="sm-links" className='text-2xl flex 2xl:ml-5 ml-2 mb-5 2xl:mb-1'>
                                  <div className="pl-2">
                                  <Link className="hover:opacity-80 hover:ease-in duration-300" href={item.url}>
                                    <MdFileOpen />
                                   </Link>
                                    </div>
                                        <div className="pl-2">
                                        <Link className="hover:opacity-80 hover:ease-in duration-300" href={item.github}>
                                    <FaGithub />
                                    </Link>
                                    </div>
                                
                                
                                </div>
                      </>
                    </div>
                    </div>
            {/* SQ ENDS HERE */}

        </div>
      ))}
    </div>
      {/* //*GRID ENDS HERE */}
    </div>
      </div>
  )
}

export default Grid