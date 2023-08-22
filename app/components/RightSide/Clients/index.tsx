import Image from "next/image";
import content from "./data";
import { MdFileOpen } from "react-icons/md";

const Clients = () => {
  return (
    <div id="gallery" className="pt-5 pb-[100px]">
      <div className="flex flex-col pt-[280px] pb-[150px]">
        <h2 className="font-bold text-3xl text-left text-parchment h-[100%] pb-5 pl-5">
          - Featured Clients -
        </h2>
        <div className="md:px-3 px-1 grid 2xl:grid-cols-2 sm:grid-cols-1 gap-1">
          {content.map((item, index) => (
            <div className="lg:px-5 px-1 hover:opacity-50" key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="flex md:1/2 w-full text-2xl md:text-left text-center drop-shadow-lg p-2 border-0">
                  <h2 className="text-aquamarine">
                    {item.icon}
                    {item.title}
                  </h2>
                  <div className="pt-1 pl-2 text-aquamarine ">
                    <MdFileOpen />
                  </div>
                </div>
                <Image
                  src={item.image}
                  alt=""
                  className="drop-shadow-lg border border-black"
                />
                <div className="text-parchment drop-shadow-lg p-2 flex justify-between">
                  <p>{item.paragraph1}</p>
                </div>
                <span>{item.icon}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
