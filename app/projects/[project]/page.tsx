import { getProject } from "@/sanity/sanity-utils"
import { PortableText} from "@portabletext/react"
import Image from "next/image"

type Props = {
    params: {project: string}
}

export default async function Project({params}: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return<> 
        <div className="flex justify-around px-[200px] pt-[77px] bg-gray-300 drop-shadow-lg">
        <div className="flex justify-center items-center flex-col p-5">
            <h1 className="capitalize text-4xl">{project.name}</h1>
            <span className="pt-2">description goes here</span>
            </div>
        <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={450}
        className="border border-black"
        />
</div>
<div className="bg-test1 flex justify-center">

<div className="">
<article className="w-3/4 pr-[50px] pt-[50px] pl-[100px] py-4 absolute right-0 mx-200">
    {/* //todo later: CHANGE TO WEB COMIC LAYOUT IMAGES ONLY v*/}

    <>
    {/* <div className="sub-images-section">
          {images.map(({ _key, asset }, image) => (
            <Image key={_key} identifier="image" image={asset} />
          ))}
        </div> */}
    </>
    {/* <PortableText value={project.body} /> */}
    {/* //todo later: WEB COMIC LAYOUT IMAGES ONLY ^   */}

    </article>
    </div>
    </div>
        </>
        
}