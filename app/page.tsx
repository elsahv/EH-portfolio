import LeftSide from "../components/LeftSide";
import {getProjects} from "@/sanity/sanity-utils"
import Link from 'next/link' 
import Image from "next/image";
import { MdFileOpen } from "react-icons/md";


export default async function Home() {

  const projects = await getProjects()

  return (
    <main>
      <LeftSide />

      {/* //*RIGHTSIDE v */}
      <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden p-5"id="right-side">
        {/* //todo: CREATE DYNAMIC CARD COMP v*/}
        <div className="mt-[75px]">
        <div className="pt-5 mt-5">
        {projects.map((project) => (
          <div key={project._id}>

        {/* //todo: MAKE SLUG VISIBLE WHEN CONTENT AVAILABLE v*/}
          {/* <Link href={`/projects/${project.slug}`}> */}
        {/* //todo: MAKE SLUG VISIBLE WHEN CONTENT AVAILABLE ^*/}
            <div className="">
          <Link href={project.url}>
            <div className="lg:px-5 px-1 hover:opacity-50">
            <div className="mt-5 p-2 flex md:1/2 w-full text-2xl md:text-left text-center drop-shadow-lg border-0">
             <h2 className="text-aquamarine">{project.name}</h2>
             <div className="pt-1 pl-2 text-aquamarine ">
                    <MdFileOpen />
                  </div>
                  </div>
              <div>
                <Image className="drop-shadow-lg border-2 border-black"
                src={project.image}
                alt={project.name}
                width={1050}
                height={750}
                />
              </div>
              <p className="text-parchment drop-shadow-lg p-2 flex justify-between pb-[50px]">{project.description}</p>
          </div>
           </Link>
          </div>
          </div>
        ))}
        </div>
        </div>
        {/* //todo: CREATE DYNAMIC CARD COMP ^ */}
      </section>
    </main>
  );
}
