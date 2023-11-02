import Grid from './Grid'
// import Mindmaps from './Mindmaps'
import Footer from "../Footer";
// import Test from '../Test';
import {getProjects} from "@/sanity/sanity-utils"
import Link from 'next/link';
import Image from 'next/image';

export default async function RightSide() {
  const projects = await getProjects()
  return (
   <section id="right-panel" className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden"> 
   <div className="m-5 pl-3 py-[20px] pr-[10px]">
    <Grid />
    {/* <Mindmaps /> */}
    {/* <Test /> */}

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
             width={850}
             height={800}
             className="border border-black"
             />
            
          )}
           </div>
           </Link>
          </div>
     ))}
      </>
    <Footer />
    </div>
  </section>
  )
}
