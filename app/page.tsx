'use client'

import { getProjects } from "@/sanity/sanity-utils";
import LeftSide from "../components/LeftSide";
import Link from "next/link";
import Image from "next/image";
import Grid from "@/components/RightSide/Grid";
import Footer from "@/components/Footer";
// import RightSide from "../components/RightSide";


export default async function Home() {
const projects = await getProjects()

  return (
    <>
      <LeftSide />
      {/* <RightSide /> */}
      <section id="right-panel" className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden"> 
   <div className="m-5 pl-3 py-[20px] pr-[10px]">
    <Grid />
    {/* <Mindmaps /> */}
    {/* <Test /> */}

      <>
      <h2 className="pt-5 text-4xl underline ml-3">Creative Projects</h2>
        <div className="grid grid-cols-2 gap-x-10">
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
     </div>
      </>
    <Footer />
    </div>
  </section>
    </>
  );
}