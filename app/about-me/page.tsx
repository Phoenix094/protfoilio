import React from "react";
import { GoMail } from "react-icons/go";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

import ContactForm from "@/components/ContactForm";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center  flex flex-col items-center justify-center"
    >
      <div className="flex justify-center items-start flex-col gap-y-6">
        <div className="flex gap-x-4 text-white items-center">
          <GoMail className="" size={30} />
          <a href="mailto:someshchavhan904@gmail.com">Somesh Chavhan</a>
        </div>
        <div className="flex gap-x-4 text-white items-center">
          <FaGithub className="" size={30} />
          <a href="http://github.com/Phoenix094">Phoenix094</a>
        </div>
        <div className="flex gap-x-4 text-white items-center">
          <FaLinkedin className="" size={30} />
          <a href="https://www.linkedin.com/in/somesh-chavhan-a84542217/">
            Somesh Chavhan
          </a>
        </div>
        <div className="flex gap-x-4 text-white items-center">
          <FaInstagram className="" size={30} />
          <a href="https://www.instagram.com/_sc_thakur_/">_sc_thakur_</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
