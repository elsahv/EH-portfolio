
const Contact = () => {
  return (
      <div id="contact" className="lg:h-screen h-[100%]">
        {/* //*LEFT SIDE */}

        <section className="pt-[100px]">
          <h2 className="text-3xl text-onyx ml-5">Contact</h2>
          <div className="text-onyx">
            <p className="text-lg">
              Has my portfolio piqued your interest? If so, you can contact me
              at
              <a className="underline px-2"
                href="mailto:elsahvy@gmail.com"
              >
               elsahvy@gmail.com.
              </a>
             Looking forward to
              hearing from you!
            </p>
          </div>
        </section>

        {/* //*RIGHT SIDE */}
        <section className="">
          {/* <ContactForm /> */}
        </section>
      </div>
  );
};

export default Contact;
