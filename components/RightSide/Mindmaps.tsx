import Image from 'next/image'
import Img1 from '../../public/mindmaps/map1.jpg'
import Img2 from '../../public/mindmaps/map2.jpg'
import Img3 from '../../public/mindmaps/map3.jpg'
import Img4 from '../../public/mindmaps/map4.jpg'
import Link from 'next/link'


const posts = [
  {
    title: '4/30/23',
    image: Img1,
    url: 'http://google.com'
  },
  // {
  //   title: '6/30/23',
  //   image: Img2,
  //   url: 'http://google.com'
  // },
  // {
  //   title: '7/6/23',
  //     image: Img3,
  //     url: 'http://google.com'
  // },
  // {
  //   title: '8/3/23',
  //   image: Img4,
  //   url: 'http://google.com'
  // },
]


const Mindmaps = () => {
  return (
    <div className="mt-[105px]">
      <h2 className="pt-5 text-4xl underline ml-3">Creative Projects</h2>
      <p id="" className="">an upcoming newsletter for documenting progress. Click on each image to view post</p>
    <div className="grid grid-cols-2">
      {posts.map((item, index) => (
        <div className="p-5 flex flex-end" key={index}>
           <Link className="" href={item.url}>
            {/* <h3 className="font-bold text-lg hover:underline">{item.title}</h3> */} 

                    <div className="w-full">
                     <Image src={item.image} alt="" />
                    </div>
                    {/* <div className="flex"> */}
                    {/* <p id="post-p" className="">Lorem ips xum dolor sit amet consectetur adi earum consequuntur modi quidem. Molestiae sint quas minima. Pariatur, maxime repellendus?
                    <span className="underline pl-2">Read More</span>
                    </p> */}
                    {/* </div> */}
            
                 </Link>
        </div>
      ))}
    </div>
      </div>
  )
}

export default Mindmaps