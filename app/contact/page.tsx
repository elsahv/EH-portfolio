import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="" id="contact">
    <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 mb-5 ">

      {/* //*LEFT SIDE */}
    <section className="p-5 md:mt-[50px] md:ml-5" >
          <h2 className="text-xl my-1 pt-1">
            What do you think of this site so far?
          </h2>
          <p>
            {"I'd"} love to hear your feedback! If you are hiring any web
            developers, {"I'd"} really love to hear from ya!
          </p>

          <p className="pb-2"> 
            Simply fill out the contact form, or email me at
            <a
                className="underline pl-2"
                href="mailto:devdesignsbyelsa@gmail.com"
              >
                devdesignsbyelsa@gmail.com
              </a>
          </p>  
          </section>
          
      {/* //*RIGHT SIDE */}
      <section className="h-screen border-l border-rosyBrown">
        <div className="w-3/4 md:p-5 mt-[50px] ml-5">
          <h2 className="text-2xl pb-4">Contact</h2>
        <ContactForm />
        </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;