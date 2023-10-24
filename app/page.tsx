import Card from "@/components/Card";
import LeftSide from "../components/LeftSide";
import Websites from "../components/Websites";
import {getProjects} from "@/sanity/sanity-utils"


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

        <div className="pt-5 mt-5">
        {projects.map((project:any) => (
          <Card
          key={project.name}
          name={project.name}
          image={project.image}
          description={project.description}
          url={project.url}
          /> 
          ))}
        </div>
        </div>
        <>
        </>
      </section>
    </main>
  );
}