import Image from "next/image"
import Img1 from '../public/screenshots/lc.png'
import Img2 from '../public/screenshots/roof.png'
import Img3 from '../public/screenshots/rq.png'
import Img4 from '../public/screenshots/wtbh.png'
import Link from "next/link"
import { MdFileOpen } from "react-icons/md";


//todo: MOVE TO CONSTANTS v
const websites = [
  {
    title: 'Laughing Coyote Dev',
    image: Img1,
    desc: 'An attempt at freelancing for small business/ creative websites',
    url: 'https://laughingcoyote.dev'
  },
  {
    title: 'HoveyRoofing',
    image: Img2,
    desc: 'Small static site for small business HoveyRoofing, located in Redlands CA',
    url: 'https://hoveyroofing.'

  },
  {
    title: 'The Running Quail',
    image: Img3,
    desc: 'Currently a survey, and gathering info for a future Morongo Basin Community',
    url: 'https://therunningquail.com'

  },
  {
    title: 'Writing To Better Health',
    image: Img4,
    desc: 'A blog template for now, and future blog regarding nutrition and mental wellness',
    url: 'https://writingtobetterhealth.com'

  },
]
//todo: MOVE TO CONSTANTS ^


const Websites = () => {
  return (
    <div className="mt-[105px]">
    <div className="p-5">
           <h2 className="pl-1 pb-3 text-4xl underline">Blog</h2>
           <div className="grid grid-cols-2 gap-x-8 gap-y-6">
     {websites.map((item, index) => (
      <div key={index}>
       <div className="mt-5 p-2 flex md:1/2 w-full text-2xl md:text-left text-center drop-shadow-lg border-0">
      <h2 className="text-aquamarine">{item.title}</h2>
      <div className="pt-1 pl-2 text-aquamarine ">
      <Link href={item.url}>
                    <MdFileOpen />
                </Link>
                  </div>
                  </div>
                  <Link href={item.url}>
              <Image className="drop-shadow-lg border-2 border-black"
                    src={item.image}
                      alt={item.title}
                        width={950}
                        height={450}
                          />
                 </Link>
       <p className="text-parchment drop-shadow-lg p-2 flex justify-between pb-[100px]">{item.desc}</p>
      </div>
     ))}
     </div>
    </div>
    </div>
  )
}

export default Websites