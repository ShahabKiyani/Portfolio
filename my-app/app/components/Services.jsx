import { serviceData } from "@/assets/assets";
import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg dont-Ovo">My Previous Work</h4>
      <h2 className="text-center text-5xl font-Ovo">Experiences</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Here you can see my work experiences showcasing some of my skills
      </p>
      <div className="grid grid-cols-1 gap-6 my-10">
        {serviceData.map(({ icon, title, date, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-auto hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <h4 className="text-sm mb-3 text-gray-800">{date}</h4>
            {Array.isArray(description) ? (
              <ul className="list-disc pl-5 text-sm text-gray-600 leading-5">
                {description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600 leading-5">{description}</p>
            )}

            {link && (
              <a
                href={link}
                target="_blank"
                className="flex items-center gap-2 text-sm mt-5"
              >
                Visit Website{" "}
                <Image alt="" src={assets.right_arrow} className="w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/in/shahab-kiyani/"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Link to LinkedIn
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        ></Image>
      </a>
    </div>
  );
};

export default Services;
