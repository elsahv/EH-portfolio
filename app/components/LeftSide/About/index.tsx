import Image from "next/image";
import Tagline from "../../Tagline";
import content from "./data";

const Work = () => {
  return (
    <div id="about-section" className="mt-[250px] md:pt-[50px] pt-0">
      <div className="flex lg:flex-row flex-col">
        {/* //todo: FIGURE OUT MOBILE HERO*/}

        <div className="md:hidden block text-onyx md:my-0 my-5">
          <Tagline />
        </div>

        <h2 className="text-4xl font-bold md:pt-0 pt-[150px]">About</h2>
        <p className="text-lg lg:mb-[40px] mb-1 lg:ml-2 ml-1 lg:pt-2.5 pt-0">
          -how it works!
        </p>
      </div>
      <div className="text-black text-lg mb-[50px]">
        <p className="">
          -So why should you bother with a website? What can a website do for
          your business?
        </p>
        <p className="py-2">
          -A website provides a platform for small businesses to showcase their
          products or services to a wider audience.
        </p>
        {/* <p className="pl-1 py-2">
              -Because each and every page and code was made with you in mind.
              Either you fit the website, or the website fits you!
            </p> */}
        {/* <p className="pl-1 py-2 pb-[50px]">
              -Laughing Coyote Dev was created to simplify the process of
              bringing your business online. Each site build comes with multiple
              services, leaving your more time to focus on your business
              instead!
            </p> */}
      </div>

      <div className="my-5">
        {content.map((item, index) => (
          <div key={index}>
            <h3 className="text-2xl text-onyx my-3 font-bold">
              {item.id}.{item.title}---
            </h3>
            {/* </div> */}
            <Image
              src={item.image}
              className="border border-onyx 2xl:w-1/2 w-3/4"
              alt=""
            />
            <div className="pt-3 mb-[150px] pl-3 pr-5 leading-6">
              <p className="pt-2">- {item.paragraph1}</p>
              <p className="py-5">- {item.paragraph2}</p>
              <p>- {item.paragraph3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
