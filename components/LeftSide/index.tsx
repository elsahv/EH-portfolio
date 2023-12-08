import About from "./About";
import Contact from "./Contact";

const LeftSide = () => {
  return (
    <section
      className="bg-gray-100 border-cerulean border-r-2 lg:h-screen h-[100%] md:overflow-y-scroll overflow-x-hidden 2xl:w-[770px] lg:w-[410px] lg:fixed z-50"
      id="left-side-panel"
    >
      <About />
      <Contact />
    </section>
  );
};

export default LeftSide;
