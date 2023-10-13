import { getProject } from "@/sanity/sanity-utils"
import { PortableText} from "@portabletext/react"
import Image from "next/image"

type Props = {
    params: {project: string}
}

export default async function Project({params}: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return<div>
        <div className="flex justify-around px-[200px] bg-gray-300 drop-shadow-lg">
        <div className="flex justify-center items-center flex-col p-5">
            <h1 className="capitalize text-4xl">{project.name}</h1>
            <span className="pt-2">description goes here</span>
            </div>
        <Image
        src={project.image}
        alt={project.name}
        width={900}
        height={550}
        className="border border-black"
        />


</div>
<div className="flex justify-center">

<article className="w-1/2 py-4">
    <PortableText value={project.content} />
    </article>
    </div>
        </div>
        
}