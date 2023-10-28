import Link from "next/link"
import Image from "next/image";
import Self from "../../public/self.jpg";
import JtLogo from "../../public/jt-logo.png";
import Footer from "./Footer";


const LeftSide = () => {
  return (
    <div className="bg-gray-100 border-black border-r-2 lg:h-screen h-[100%] md:overflow-y-scroll overflow-x-hidden 2xl:w-[770px] lg:w-[410px] lg:fixed z-50">
        <div className="text-lg flex flex-col gap-5">
          <div className="grid 2xl:grid-cols-2 grid-cols-1">  
      <Image  className="border border-black lg:w-full w-1/2"
       src={Self}
       alt=""
      /> 
          <span className="text-lg font-bold flex items-end lg:pt-2 pt-4 px-5 h-full">Hi there, {"I'm"} Elsa. <br />{"I'm"} a web developer based in Joshua Tree, CA.</span>
        </div>

        <div className="grid 2xl:grid-cols-2 grid-cols-1">
        <p className="pt-5">Over the last decade, {"I've"} hoarded and thought of many different and creative ideas.
       Since 2019, {"I've"} decided to learn how to bring these ideas to life through javascript progamming and frameworks.</p>
       <div>
       <Image src={JtLogo} alt="laughing coyote logo" className="w-full" />
       </div>
       </div>
             <p>
                 My days are spent working on
                my websites, and freelance projects. I am also very interested
                in working with other developers to gain team building
                experience, and build up a network to bounce ideas off of.
              </p>
        <p className="">Has my portfolio piqued your interest? If so, you can contact me at
             <Link className="underline px-2"
                href="mailto:elsahvy@gmail.com"
              >
               elsahvy@gmail.com.
              </Link>
              Looking forward to hearing from you!
               </p>
        </div>
              <Footer />
      </div>
  )
}

export default LeftSide