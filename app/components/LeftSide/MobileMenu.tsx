const Hamburger = () => {
  return (
    <div className="bg-parchment w-full text-center md:hidden fixed top-0 border-black border-b-2 ">
      <h1 className="text-black text-left text-5xl pt-3 p-5 ml-5">
        <a href="/" className="">
          Laughing Coyote Dev
        </a>
      </h1>
      <div className="flex justify-center mb-3">
        <a href="/#about" className="mx-3 px-1hover:text-cerulean">
          about
        </a>
        <a href="/#services" className="mx-3 px-1hover:text-cerulean">
          services
        </a>
        <a href="/#contact" className="mx-3 px-1hover:text-cerulean">
          contact
        </a>
      </div>
    </div>
  );
};

export default Hamburger;
