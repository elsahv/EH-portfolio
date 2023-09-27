import Card from "@/components/Card"
import { getProject } from "@/sanity/sanity-utils"
import { PortableText} from "@portabletext/react"

type Props = {
    params: {project: string}
}

export default async function Project({params}: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return<div>
         
        <div className="flex justify-around px-[200px] pt-5 bg-munsell drop-shadow-lg">
            {/* <h1 className="capitalize text-4xl">{project.name}</h1> */}

        <div className="flex justify-center items-center flex-col p-5">
            <Card
           name={project.name}
           image={project.image}
           />
            <span className="pt-2">description goes here</span>
            </div>
</div>
<div className="flex justify-center">
<article className="w-1/2 py-4">
    <PortableText value={project.content} />
    </article>
    </div>
        </div>
        
}