import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { IconType } from "react-icons";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: IconType;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  icon: Icon,
  description,
  color,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full xs:w-[300px]"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-[#915EFF] to-[#6A38E5]"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-center flex-col relative overflow-hidden group">
          <div
            className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full flex justify-center items-center bg-opacity-20 mb-4 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${color}30` }}
            >
              <Icon
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
              />
            </div>

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>

            <p className="mt-4 text-secondary text-[14px] text-center leading-[24px]">
              {description}
            </p>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            style={{ backgroundColor: color }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer with a passion for building AI models, solving
        complex problems, and teaching programming. I enjoy turning ideas into
        practical solutions and helping others grow their coding skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
