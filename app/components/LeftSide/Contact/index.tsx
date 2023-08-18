import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact-section">
      <div id="contact" className="h-screen">
        {/* //*LEFT SIDE */}

        <section className="pt-[100px]">
          <h2 className="text-3xl text-onyx">Contact</h2>
          <div className="text-onyx">
            <p className="text-lg">
              Has my portfolio piqued your interest? If so, you can contact me
              at
              <a
                className="underline pl-2"
                href="mailto:devdesignsbyelsa@gmail.com"
              >
                devdesignsbyelsa@gmail.com
              </a>
              , or simply fill out the form on the right. Looking forward to
              hearing from you!
            </p>
          </div>
        </section>

        {/* //*RIGHT SIDE */}
        <section className="">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
