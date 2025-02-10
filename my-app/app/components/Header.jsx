import { assets } from "@/assets/assets";
import React, { useRef } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.shahabpfp}
          alt=""
          className="rounded-full w-32"
        ></Image>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Shahab Kiyani{" "}
      </h3>
      <h1 className="text-3xl sm_text-6xl lg:text-[66px] font-Ovo leading-[1.2]">
        Aspiring software engineer based in Greater Boston Area
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a junior computer science student at UMASS Amherst with experience
        in fullstack web development, as well as in python, java, and c
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          ></Image>
        </a>

        <a
          href="/Shahab_Kiyani_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt=""
            className="rounded-full w-4"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Header;
