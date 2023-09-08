import Websites from "./Websites";

const RightSide = () => {
  return (
    <section className="h-screen bg-munsell md:absolute relative right-0 lg:w-3/5 w-full overflow-y-scroll overflow-x-hidden p-5"
      id="right-side"
    >
     <Websites />
    </section>
  );
};

export default RightSide;
