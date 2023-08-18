import Image from "next/image";
import content from "./data";

const Services = () => {
  return (
      <section id="services-section" className="">
        <h2 className="font-bold text-onyx text-2xl mt-[250px] text-center underline ">
          Services Offered:
        </h2>
        <div className="grid 2xl:grid-cols-3 gap-4 sm:grid-cols-1 py-5">
          {content.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-black bg-parchment"
            >
              <h3 className="text-lg text-center font-bold pt-3 px-3">
                {item.title}
              </h3>
              <div className="flex justify-center py-2">
                <Image
                  src={item.image}
                  alt=""
                  id="border"
                  className="rounded-2xl w-16 p-3 bg-munsell border border-onyx"
                />
              </div>
              <p className="text-md mt-5 px-2 pt-1 pb-3 text-md text-center">
                {item.paragraph1}
              </p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Services;
