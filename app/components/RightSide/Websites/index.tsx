import Image from "next/image";
import {websites} from "./data";
import { MdFileOpen } from "react-icons/md";

const Clients = () => {
  return (
    <div id="gallery" className="pt-5 pb-[100px]">
      <div className="flex flex-col pb-5">
        <h2 className="lg:pt-[180px] pt-1 font-bold text-3xl text-left text-onyx h-[100%] pb-[50px] pl-5">
          - Featured Websites -
        </h2>
        <div className="md:px-3 px-1 flex flex-col gap-1">
          {websites.map((item, index) => (
            <div className="lg:px-5 px-1 hover:opacity-50" key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="p-2 flex md:1/2 w-full text-2xl md:text-left text-center drop-shadow-lg border-0">
                  <h2 className="text-aquamarine " >
                    {item.title}
                  </h2>
                  <div className="pt-1 pl-2 text-aquamarine ">
                    <MdFileOpen />
                  </div>
                </div>
                <Image
                  src={item.img}
                  alt=""
                  className="drop-shadow-lg border border-black"
                />
                  <p className="text-parchment drop-shadow-lg p-2 flex justify-between pb-[50px]">{item.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
