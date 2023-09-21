import Websites from "./Websites";

const RightSide = () => {
  return (
    <section className="lg:h-screen md:w-[100%] bg-munsell md:absolute relative right-0 lg:w-3/5 w-full lg:overflow-y-scroll overflow-x-hidden p-5"
      id="right-side"
    >
     <Websites />

     {/* //todo- ADD BLOG FEATURE */}
    </section>
  );
};

export default RightSide;
