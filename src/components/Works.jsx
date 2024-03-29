import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
      tiltReverse={true}
      gyroscope={true}
      perspective={700}
      tiltAxis={"y"}
      className="glass-card bg-secondary dark:bg-primary p-5 rounded-2xl sm:w-[360px] w-full justify-evenly"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-primary dark:text-secondary font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-primary dark:text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-tertiary font-md dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects exhibit my skills and experience by demonstrating
          real-world examples of my work. Each project is concisely described
          and includes links to the relevant code. The live demos showcase my
          ability to solve complex problems, work with diverse technologies, and
          effectively manage projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-evenly">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
