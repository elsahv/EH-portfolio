import Image from "next/image";
import Link from "next/link";


interface Props {
    id: string;
    title: string;
    image: string;
}


const Card = async ({id, title, image}: Props) => {


  return (
    <div>
        <h2>{title}</h2>
            <Image
             src={image}
             alt={title}
             width={450}
             height={400}
             className="border border-black"
           />
    </div>
  )
}

export default Card