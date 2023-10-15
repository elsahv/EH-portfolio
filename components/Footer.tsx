'use client'

import { FaLinkedin, FaYelp } from "react-icons/fa";
const today = new Date();

const Footer = () => {
  return (
    <footer className="text-black text-lg flex justify-center items-center py-5">
      {/* //todo: MAKE VISIBLE IF FOLLOW THROUGH v */}
      {/* <FaLinkedin className="" />
      <FaYelp className="" /> */}
      {/* //todo: MAKE VISIBLE IF FOLLOW THROUGH v */}
      <p className="pl-2 ml-5">&copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
