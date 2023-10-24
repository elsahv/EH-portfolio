import Card from "@/components/Card";
import LeftSide from "../components/LeftSide";
import Websites from "../components/Websites";
import {getProjects} from "@/sanity/sanity-utils"
import Link from "next/link";


export default async function Home() {

  const projects = await getProjects()

  return (
    <main>
      <LeftSide />
      {/* //*RIGHTSIDE v */}
      <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden p-5"id="right-side">
        <div className="mt-[75px]">
          <div className="pt-[150px]">
            <h2 className="pl-1 pb-3 text-4xl underline">Featured Websites</h2>
            <div className="">
          <Websites />
          </div>
          </div>
      {/* //*RIGHTSIDE ^ */}

      {/* //todo MINDMAPS v */}
        {/* <div className="pt-5 mt-5">
        <h2 className="pl-5 pb-3 text-4xl underline">Mindmaps</h2>
        <div className="grid grid-cols-2">
        {projects.map((project:any) => (  
          <Card
          key={project.name}
          name={project.name}
          image={project.image}
          description={project.description}
          // url={project.url}
          slug={project.slug}
          /> 
          ))}
          </div>
        </div> */}
      {/* //todo MINDMAPS ^ */}

        </div>
        <>
        </>
      </section>
    </main>
  );
}