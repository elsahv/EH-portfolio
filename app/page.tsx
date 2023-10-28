import Card from "@/components/Card";
import LeftSide from "../components/LeftSide";
import {getProjects} from "@/sanity/sanity-utils"
import Link from "next/link";
import Grid from "@/components/Grid";


export default async function Home() {

  // const projects = await getProjects()

  return (
    <>
      <LeftSide />
      {/* //*RIGHTSIDE v */}
      <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden"id="right-side">
        <div className="mt-[75px]">
          <div className="pt-[10px]">
        <Grid />
          </div>
        </div>
      </section>
      {/* //*RIGHTSIDE ^ */}
    </>
  );
}