import React from "react";
import {Tilt} from "react-tilt";
import { motion as Motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utlis/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <Motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </Motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Introduction</p>
      </Motion.div>

      <Motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        My name is Syed Imran, and I hold a Bachelor's degree in Electronics and Communication Engineering from Marri Laxman Reddy Institute of Technology and Management.
        <br></br>
        With a strong foundation in programming languages such as Python, Java, and JavaScript, I’ve developed a passion for web development—specializing in crafting responsive, user-friendly web applications. I am proficient in HTML and CSS, and well-versed in modern front-end frameworks and libraries including React.js, Bootstrap, and Tailwind CSS.
        <br></br>
        I also have hands-on experience with essential development tools like Git, GitHub, VS Code, and Figma, which I use regularly to streamline my workflow and ensure high-quality deliverables.
        <br></br>
        I take pride in writing clean, efficient code and continuously seek opportunities to learn and grow in the ever-evolving field of web development.
      </Motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about")

export default WrappedAbout;