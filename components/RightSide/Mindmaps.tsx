import Image from 'next/image'
import Img1 from '../../public/screenshots/lc.png'
import Img2 from '../../public/screenshots/roof.png'
import Img3 from '../../public/screenshots/rq.png'
import Img4 from '../../public/screenshots/wtbh.png'
import Link from 'next/link'
import { MdFileOpen } from "react-icons/md";


const posts = [
  {
    title: '4/30/23',
    image: Img1,
    url: 'http://google.com'
  },
  {
    title: '6/30/23',
    image: Img2,
    url: 'http://google.com'
  },
  {
    title: '7/6/23',
      image: Img3,
      url: 'http://google.com'
  },
  {
    title: '8/3/23',
    image: Img4,
    url: 'http://google.com'
  },
]


const Mindmaps = () => {
  return (
    <div className="mt-[75px]">
      <h2 className="pt-5 text-4xl underline ml-3">Creative Projects</h2>
      <p id="" className="">Listed below are some featured website projects. Click on each image to view website</p>
    <div className="grid grid-cols-1 gap-3">
      {posts.map((item, index) => (
        <div className="p-5" key={index}>
           <Link className="" href={item.url}>
            <h3 className="font-bold text-lg hover:underline">{item.title}</h3>
                    <p id="post-p" className="">Lorem ips xum dolor sit amet consectetur adipisicing elit. Mollitia, tempore quam rerum quas harum eum praesentium id maxime a earum consequuntur modi quidem. Molestiae sint quas minima. Pariatur, maxime repellendus?
                    <span className="underline pl-2">Read More</span>
                    </p>
                 </Link>
        </div>
      ))}
    </div>
      </div>
  )
}

export default Mindmaps