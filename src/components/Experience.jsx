import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a1a1a",
        border: "1px solid #f3f3f3",
        color: "#111111",
        borderRadius: "5px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #b14" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="glass-card w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="dark:text-secondary text-primary text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="dark:text-[#ffffff] text-primary text-[16px] font-medium"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-secondary text-primary text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}></p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
