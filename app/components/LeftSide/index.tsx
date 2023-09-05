import About from "./About";
import ServicesInfo from "./ServicesInfo";
import Contact from "./Contact";
import Header from "./Header";

const index = () => {
  return (
    <section
      id="left-side"
      className="bg-parchment md:h-screen h-full md:absolute relative md:left-0 sm:bottom-0 md:w-2/5 w-full overflow-y-scroll overflow-x-hidden"
    >
  <div>
       <Header />
        <div className="lg:px-5 lg:mx-5 md:px-3 md:mx-3 px-2 mx-2 snap-y snap-mandatory z-0 md:block hidden">
          <div>
              <About />
              <ServicesInfo />
              <Contact />
          </div>
        </div>
      </div>    
    </section>
  );
};

export default index;
