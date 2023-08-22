import Image from "next/image";
import content from "./data";

const Grid = () => {
  return (
    <div id="gallery" className="pt-5 pb-[100px]">
      <div className="flex flex-col pt-[280px] pb-[150px] ">
        <h2 className="underline font-bold text-3xl text-right text-parchment h-[100%] pb-5 pr-5 mr-3">
          Endless Designs
        </h2>
        <p className="text-munsell mx-5 p-5">
          Which website is right for me?? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias, ab ad? Tempora similique fuga ut, tempore
          optio possimus nisi, magni cumque architecto atque voluptatibus
          expedita, rerum repudiandae excepturi? Ratione, expedita.
        </p>
        <div className="grid grid-cols-2 gap-1">
          {/* //todo: ADD HOVER TITLE */}
          {/* //todo: ADD ZOOM IN TITLE FEATURE, FOR MOBILE- ABSOLUTE BOTTOM VISIBLE */}
          {content.map((item, index) => (
            <div
              className="hover:border border-onyx hover:opacity-50 md:p-2"
              key={index}
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <Image
                  src={item.image}
                  alt=""
                  className="drop-shadow-lg border border-black h-[280px]"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
