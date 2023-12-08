"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Websites from "@/components/Websites";
import { getProjects } from "@/sanity/sanity-utils";

export default async function RightSide() {
  const projects = await getProjects();

  return (
    <section
      className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden"
      id="right-side-panel"
    >
      <div className="m-5 pl-3 py-[20px] pr-[10px]">
        <Websites />

        <div className="b-test2 mt-[155px] pt-5">
          <h2 className="text-4xl underline ml-3">Creative Projects</h2>
          <div id="projects-grid" className="grid grid-cols-2 gap-x-10">
            {projects.map((project) => (
              <div key={project._id}>
                <h2 className="capitalize pl-1 pt-5">{project.name}</h2>
                <Link href={`/projects/${project.slug}`}>
                  <div className="bg-test1 mb-5 border border-black">
                    {/*//todo sooner: <-- IMP BG COLOR TAG CHANGE, APPLIES TO PARAGRAPH COLOR BACKGROUND   (EX: WTBH IS AQUAMARINE, LC IS ORANGE*/}
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={850}
                        height={800}
                        className="border-b border-black"
                      />
                    )}
                    <p>
                      dfdfds Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Error, dolore vel autem saepe accusantium blanditiis
                      impedit nesciunt porro doloribus perferendis sint fugiat,
                      inventore, fugit in cum minima ab similique culpa!
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
