import LeftSide from "../components/LeftSide";
import Websites from "../components/Websites";
import Image from 'next/image'
import {getProjects} from "@/sanity/sanity-utils"
import Link from 'next/link' 
 
export default async function Home() {

  const projects = await getProjects()

  return (
    <main>
      <LeftSide />

      {/* //*RIGHTSIDE v */}
      <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden p-5"id="right-side">
        <Websites />
        <>
        {projects.map((project) => (
        <div key={project._id}>
          <h2 className="capitalize pl-1 pt-5">{project.name}</h2> 
          <Link href={`/projects/${project.slug}`}>
            <div className="mb-5">
          {project.image && ( 
            <Image
             src={project.image}
             alt={project.name}
             width={450}
             height={400}
             className="border border-black"
             />
            
          )}
           </div>
           </Link>
          </div>
     ))}
        </>
      </section>
    </main>
  );
}
