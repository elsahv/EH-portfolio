import LeftSide from "../components/LeftSide";
import Websites from "../components/Websites";
import Image from 'next/image'
import {getProjects} from "@/sanity/sanity-utils"
import Link from 'next/link' 
import Card from "@/components/Card";
 
export default async function Home() {

  const projects = await getProjects()

  return (
    <main>
      <LeftSide />

      {/* //*RIGHTSIDE v */}
      <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden p-5"id="right-side">
        <Websites />
        <>

        {/* //todo: CREATE DYNAMIC CARD COMP v*/}
        {/* //! REFRESH ON PASSING PROPS INTO COMP*/}

        {projects.map((project) => (
          <div key={project._id}>
          <Link href={`/projects/${project.slug}`}>
          <Card />

            <div className="mb-5">
          <h2 className="capitalize pl-1 pt-5">{project.name}</h2> 

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

        {/* //todo: CREATE DYNAMIC CARD COMP ^ */}

        </>
      </section>
    </main>
  );
}
