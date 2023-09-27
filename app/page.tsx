import LeftSide from "../components/LeftSide";
import Websites from "../components/Websites";
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
        {projects.map((project) => (
          <div key={project._id}>
          <Link href={`/projects/${project.slug}`}>
            <div className="w-1/2">
          <Card
           name={project.name}
           image={project.image}
          />
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
