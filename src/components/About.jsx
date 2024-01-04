import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ i, title, icon }) => (
  <Tilt
    tiltReverse={true}
    gyroscope={true}
    perspective={1000}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", i * 0.5, 0.75)}
      className="w-full justify-between glass-card p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-primary dark:text-secondary text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <img
          src="/pfp.jpg"
          alt="profile"
          className="w-[150px] h-auto rounded-lg"
        />
        <p
          className={`${styles.sectionSubText} dark:${styles.darkSectionSubText}`}
        >
          Introduction
        </p>
        <h2
          className={`${styles.sectionHeadText} dark:${styles.darkSectionHeadText}`}
        >
          About Me
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-primary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Roger, a Web Developer with experience producing graphic designs.
        Educated in TypeScript and JavaScript and have expertise in React, Node.js, and Next.js. Experienced with Three.js,
        React-Three-Fiber, and programs like Blender to produce 3D models.
        Able to collaborate with teammates to produce results efficiently and effectively and with clients to design their visions
        with accessible, optimized, and scalable industry-standard solutions.
        Give me a shout, let's create something awesome!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 py-24">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
