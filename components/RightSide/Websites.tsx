import Image from "next/image";
import Img1 from "../../public/screenshots/lc.png";
import Img2 from "../../public/screenshots/rq.png";
import Img3 from "../../public/screenshots/wtbh.png";
import Img4 from "../../public/screenshots/jungle.png";
import Link from "next/link";
import { MdFileOpen } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import Card from "../Card";

const posts = [
  {
    // title: 'Laughing Coyote',
    title: "small businesses",
    image: Img1,
    url: "http://laughingcoyote.dev",
    p: "Laughing Coyote Dev- the start of a freelancing website for small business/ creative websites",
    github: "https://github.com/elsahv/laughing-coyote-dev",
  },
  {
    title: "high desert locals and enthusiasts",
    image: Img2,
    url: "http://therunningquail.com",
    p: "The Running Quail- currently a survey/ blog for a future Morongo Basin community website",
    github: "https://github.com/elsahv/-the-running-quail",
  },
  {
    title: "wordpress users",
    image: Img4,
    url: "http://theindoorjungleproject.com",
    p: "The Indoor Jungle Project- currently a blog about plants and house projects",
    github: "https://github.com/elsahv/php-template-blog",
  },
  {
    title: "and dietitians/ nutritionists",
    image: Img3,
    url: "http://writingtobetterhealth.com",
    p: "Writing to Better Health- A blog template for now, and future blog regarding nutrition and mental wellness",
    github: "https://github.com/elsahv/writing-to-better-health",
  },
];

//todo later: ADD CREATIVE PROJECTS FILTER BTNS

const Websites = () => {
  return (
    // <div className="mt-[75px]">
    <div className="2xl:mt-[75px] mt-3">
      <div className="mb-5 pt-2">
        {/* <ul className="text-aquamarine flex space-x-4">
        <li className="bg-onyx border border-black px-3 py-1 rounded">All Featured Sites</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">Writing to Better Health</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">Laughing Coyote Dev</li>
        <li className="bg-onyx border border-black px-3 py-1 rounded">The Running Quail</li>
      </ul> */}
        {/* <ul className="flex space-x-4">
        <li className="bg-test1 border border-black px-3 py-1 rounded">Illustrative mindmaps</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Coding Projects</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Blog</li>
        <li className="bg-test1 border border-black px-3 py-1 rounded">Newsletter</li>
      </ul> */}
      </div>
      {/* <h2 className="pt-5 text-4xl underline ml-3">Web Development and Designs</h2> */}

      <div className="flex items-center text-4xl">
        <h2 className="pt-5 underline ml-3">Development and Designs</h2>

        <div className="pt-[29px] ml-3 text-onyx">
          <MdConstruction />
        </div>
      </div>

      <p className="text-2xl">
        Listed below are some of my featured websites projects, all currently a
        <span className="underline px-1">work in progress.</span>
        These websites are being built to assist...
      </p>
      {/* //*GRID STARTS HERE */}
      <div id="website-grid" className="grid grid-cols-1 gap-x-4 gap-y-16 mt-5">
        {posts.map((item, index) => (
          <div className="rounded dropshadow-lg" key={index}>
            {/* // todo sooner, last viewed- 12/20/23: CARD STARTS HERE v */}
            {/* <Card /> */}
            <div
              id="sq"
              className="2xl:grid 2xl:grid-cols-2 grid-cols-1 bg-test2 border-2 border-cerulean rounded-lg "
            >
              <Link
                className="hover:opacity-80 hover:ease-in duration-300"
                href={item.url}
              >
                <Image
                  className="2xl:w-[850px] w-full rounded-tl-lg rounded-bl-lg drop-shadow-3xl 2xl:border-r 2xl:border-b-0 border-b border-rosyBrown"
                  src={item.image}
                  alt={item.title}
                />
              </Link>
              <div className="py-5">
                <h3 className="text-2xl font-bold pt-5 pl-5">
                  ...{item.title}
                </h3>
                <p className="text-lg">{item.p}</p>
                <>
                  <div
                    id="sm-links"
                    className="text-2xl flex 2xl:ml-5 ml-2 mb-5 2xl:mb-1"
                  >
                    <div className="pl-2">
                      <Link
                        className="hover:opacity-80 hover:ease-in duration-300"
                        href={item.url}
                      >
                        <MdFileOpen />
                      </Link>
                    </div>
                    <div className="pl-2">
                      <Link
                        className="hover:opacity-80 hover:ease-in duration-300"
                        href={item.github}
                      >
                        <FaGithub />
                      </Link>
                    </div>
                  </div>
                </>
              </div>
            </div>
            {/* // todo sooner, last viewed- 12/20/23: CARD STARTS HERE- END^ */}
          </div>
        ))}
      </div>
      {/* //*GRID ENDS HERE */}
      {/* </div> */}
    </div>
  );
};

export default Websites;
