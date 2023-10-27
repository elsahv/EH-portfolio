import Card from "@/components/Card";
import LeftSide from "../components/LeftSide";
import Websites from "../components/Websites";
import {getProjects} from "@/sanity/sanity-utils"
import Link from "next/link";
import CreativeProjects from "@/components/CreativeProjects";


export default async function Home() {

  // const projects = await getProjects()

  return (
    <>
      <LeftSide />
      {/* //*RIGHTSIDE v */}
      <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden"id="right-side">
        <div className="mt-[75px]">
          <div className="pt-[10px]">
        <CreativeProjects />
          </div>
          {/* <Websites /> */}
        </div>
      </section>
      {/* //*RIGHTSIDE ^ */}
    </>
  );
}