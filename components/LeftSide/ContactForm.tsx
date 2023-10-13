'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    //todo: FIGURE OUT WHY .ENV ISNT WORKING v
    emailjs
      .send(
        "service_8nm4fjs",
        "template_ua2cv0e",
        templateParams,
        "axTnvligI9DLgch9A"
    //todo: FIGURE OUT WHY .ENV ISNT WORKING v
          //todo: FIGURE OUT WHY .ENV ISNT WORKING v

      
        )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <div className="mx-auto bg-coral px-8 pt-[2em] pb-8" >
    <div className="">
    <h3 className="font-bold text-2xl md:text-3xl">Contact</h3>
    <div className="mx-auto mt-4 mb-5 md:mb-6 lg:mb-8">
 <div className=" text-sm sm:text-sm">  Has my portfolio piqued your interest? If so, you can contact me at
 <a className="underline px-2"
                href="mailto:elsahvy@gmail.com"
              >
               elsahvy@gmail.com.
              </a>
 </div>


                <div className=" text-sm sm:text-sm">Looking forward to hearing from you!</div>
              </div>


              {/*  */}
              <div className="mx-auto w-full">
                <div className="mx-auto  mb-4">
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="name">Name:</label>
        <input className="max-w-[600px] m-0 mb-4 block border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col ">
        <label className="mb-1 font-medium" htmlFor="email">Email:</label>
        <input className="max-w-[600px] m-0 mb-4 block border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="message">Message:</label>
        <textarea className="max-w-[600px] border border-black"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="my-3">
      <input type="submit" value="Send" className="hover:bg-test2 hover:text-teal rounded mt-4 max-w-sm cursor-pointer items-center bg-black px-4 py-2 text-center font-semibold text-white"/>
    </div>
    </form>

    </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;