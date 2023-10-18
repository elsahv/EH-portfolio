import Footer from "@/components/Footer"
import { getProject } from "@/sanity/sanity-utils"
import { PortableText} from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai"
import { MdFileOpen } from "react-icons/md"

type Props = {
    params: {project: string}
}


//? IMPLEMENT LAYOUT FILE

export default async function Project({params}: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return<div>
        <div className="flex justify-around px-[200px] bg-munsell h-[600px] text-aquamarine drop-shadow-lg">
        <div className="flex justify-center items-center flex-col p-5 bg-tedddl;st">
            <div className="flex items-center">
                <Link href="/">
           <div className="px-1 mr-3 text-3xl hover:text-parchment">
            <AiOutlineArrowLeft />
                </div> 
                </Link>
            <h1 className="capitalize text-4xl">{project.name}</h1>
            </div>
            <span className="ml-[100px] pt-2 mt-1 w-3/4">
                {project.description}
                </span>
               {/* //todo: MAKE VISIBLE IF FOLLOW THROUGH v */}
                <div className="flex text-3xl mt-5">
            <Link className="px-2" href={project.githublink}>
            <AiFillGithub />
            </Link>
            <Link className="px-2" href="/">
            <MdFileOpen />
            </Link>
                </div>
               {/* //todo: MAKE VISIBLE IF FOLLOW THROUGH ^ */}
            </div>
            <Link href={project.url} className="mt-[120px]">
        <Image className="border border-black"
        src={project.image}
        alt={project.name}
        width={900}
        height={850}
        />
        </Link>
</div>
<div className="flex justify-center bg-gray-100">
<article className="w-3/4 py-4 mt-[50PX] pt-5">
    <PortableText value={project.body} />   
    </article>
    </div>
    <Footer />
        </div>
        
}