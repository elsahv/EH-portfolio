import { getProject } from "@/sanity/sanity-utils"
import { PortableText} from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"

type Props = {
    params: {project: string}
}

export default async function Project({params}: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return<div>
        <div className="flex justify-around px-[200px] bg-gray-300 drop-shadow-lg">
        <div className="flex justify-center items-center flex-col p-5 bg-test">
            <div className="flex items-center">
                <Link href="/">
           <div className="px-1 mr-3 text-3xl"><AiOutlineArrowLeft /></div> 
                </Link>
            <h1 className="capitalize text-4xl">{project.name}</h1>

            </div>
            <span className="ml-[100px] pt-2 mt-1 w-3/4">
                {project.description}
                </span>
            </div>
        <Image className="border border-black mt-[75px]"
        src={project.image}
        alt={project.name}
        width={900}
        height={650}
        />


</div>
<div className="flex justify-center">

<article className="w-3/4 py-4 mt-[50PX] pt-5">
    <PortableText value={project.content} />    {/* //?:WHY IS PORTABLE TEXT NOT WORKING?? C v*/}   
    <div className="px-5 mx-[100px]">
     <h3 className="font-bold pl-5 pt-2">title fjlksdfj jfklsdjfdks jdskljf</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias pariatur sit facilis natus autem exercitationem excepturi iure ipsa, necessitatibus corporis repudiandae rem, officiis cumque obcaecati esse blanditiis dolores placeat sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis expedita eius ipsam cupiditate adipisci esse, rem excepturi recusandae placeat iusto beatae quidem laboriosam fugiat minima facilis debitis error quibusdam. Nostrum, labore! Dicta hic aspernatur deleniti dignissimos consequatur quasi blanditiis vero libero dolorum quisquam consequuntur tempore soluta, amet praesentium possimus nobis optio iste tenetur quam, est et doloribus? Perferendis reiciendis fuga facilis? Expedita quos optio nulla amet corporis hic, veritatis adipisci nam labore omnis atque quo temporibus consequuntur perspiciatis voluptas dicta. Ad quibusdam, tempora exercitationem vero eveniet officiis magni aliquam hic doloremque consequuntur facere corporis deserunt optio alias a fugiat id, velit eos at harum. Sit consectetur minus dolorem? Ullam minus quo veritatis molestiae blanditiis voluptatem aperiam reiciendis! Autem eaque quibusdam maiores quam, quas vero neque nobis ea corrupti laudantium ullam sunt! Ea quis fugit explicabo praesentium quasi officiis odit dolorem voluptas dicta, dolore neque ratione laborum rerum corrupti sed. Blanditiis radistinctio a sapiente ex deleniti atque consequatur iusto accusamus nesciunt esse, quia sint qui maxime facilis ab temporibus expedita architecto recusandae minima. Id architecto atque dolores impedit soluta corporis laboriosam quam tenetur ipsum ea officiis magnam, harum eveniet nostrum ad accusamus illum dolor aut delectus veritatis reprehenderit, beatae nobis laudantium? Vitae voluptas voluptates dignissimos aliquam, provident nostrum amet doloremque, corrupti possimus earum sint veritatis adipisci cumque fuga cupiditate dolorem explicabo, beatae eaque neque necessitatibus veniam animi laudantium! Explicabo, nobis repudiandae!</p>
    <h3 className="font-bold pl-5 pt-2">title  fjlksdfj jfklsdjfdks jdskljf</h3>
    <p>tione ea aut earum? Nobis corrupti molestiae aliquam obcaecati mollitia reprehenderit? Voluptatum deserunt iste iure vero, fugit obcaecati, doloribus sunt atque dolorum quas at inventore. Maiores reprehenderit nostrum sequi quos quis repudiandae consectetur nam ipsam rerum officiis sapiente cum quibusdam iure animi, magni autem pariatur voluptate, suscipit ratione, excepturi eaque ex velit? A animi dignissimos odio dolore esse perferendis enim reprehenderit cum eum. Est id consectetur quasi quam vero commodi magnam sed laboriosam. Nemo vel debitis at quam deserunt minima sit quibusdam recusandae totam dolore nihil voluptatum possimus enim sed eos qui rem, quidem architecto in ipsam! Ab sunt quidem modi officiis obcaecati corrupti ratione provident laudantium aspernatur distinctio, quae accusamus! Quas, neque? Repudiandae nulla itaque natus ipsa, obcaecati voluptas. Repudiandae dignissimos blanditiis illo nemo recusandae totam atque fuga, porro explicabo quisquam sunt ut a quod earum magnam officiis quis et nihil animi obcaecati aspernatur. Tempore vitae non libero hic natus, harum et est totam blanditiis porro quia at itaque ut voluptates optio quos, molestiae, rem placeat rerum. Incidunt doloribus reiciendis consequatur architecto facere possimus magnam consequuntur fugit vitae aperiam, vero corrupti, fuga rem dignissimos quaerat maxime maiores aliquam quae excepturi nihil culpa rerum sit? Vitae quam laboriosam error sequi amet nisi fugit iusto recusandae excepturi mollitia, dignissimos modi molestiae voluptas distinctio, dolore optio. Officiis optio doloribus numquam iure ipsam voluptas saepe minima animi delectus nobis, ad qui? Numquam veritatis tempora alias totam. Fugit, ipsa necessitatibus, quod ut magnam dolorum inventore accusantium officiis repudiandae voluptas, a doloremque. Delectus quo, beatae laborum repellat quibusdam et optio. Architecto nemo, aut repudiandae reprehenderit sequi dignissimos! Iste excepturi quis enim dolorum quae officia, </p>
    </div>
    </article>
    </div>
        </div>
        
}