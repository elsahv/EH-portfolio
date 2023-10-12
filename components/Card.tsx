import Image from 'next/image'

interface Props {
  name: string;
  image: string;
}


export default async function Card({ name, image}: Props) {


  return (
    <div className="">
<div className="p-1 mt-5">
         {name}
    </div>
    
    <div>
    {image && ( 
            <Image
             src={image}
             alt={name}
             width={900}
             height={550}
             className="border border-black"
             />
          )}
           </div>
    </div>
  )
}