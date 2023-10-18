import Image from 'next/image';
import Link from 'next/link';
import { MdFileOpen } from "react-icons/md";

import React from 'react'
interface Props {
  name: string;
  image: string;
  description: string;
  url: URL;
}


const Card = ( {  name, image, description, url  }: Props) => {
  return (
     <div className="">
    <div className="lg:px-5 px-1 hover:opacity-50">
    <div className="mt-5 p-2 flex md:1/2 w-full text-2xl md:text-left text-center drop-shadow-lg border-0">
      <h2 className="text-aquamarine">{name}</h2>
      <div className="pt-1 pl-2 text-aquamarine ">
      <Link href={url}>
                    <MdFileOpen />
                </Link>
                  </div>
                  </div>
              <div>
              <div>
                <Link href={url} className="">
                <Image className="drop-shadow-lg border-2 border-black"
                src={image}
                alt={name}
                width={1050}
                height={750}
                />
                </Link>
                </div>
          <p className="text-parchment drop-shadow-lg p-2 flex justify-between pb-[100px]">{description}</p>
              </div>
              </div>
              </div>      
            )
}

export default Card



