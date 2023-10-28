import Footer from "../Footer";
import About from "./About";
import Contact from "./Contact";


const LeftSide = () => {
  return (
    <section id="left-panel" className="bg-gray-100 border-black border-r-2 lg:h-screen h-[100%] md:overflow-y-scroll overflow-x-hidden 2xl:w-[770px] lg:w-[410px] lg:fixed z-50">
          <About />
          <Contact />
          <Footer />
      </section>
  )
}

export default LeftSide