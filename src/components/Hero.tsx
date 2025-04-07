import { motion } from "framer-motion";
import { styles } from "../styles";
import HeroScene from "./canvas/HeroScene";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiMouseAlt } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  // Use the ThemeContext directly
  const { themeColors } = useContext(ThemeContext);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: themeColors.accent }}
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={styles.heroHeadText} style={{ color: themeColors.text }}>
            Hi, I'm{" "}
            <span style={{ color: themeColors.accent }}>
              Haithem Abdelkahar KHOMRI
            </span>
          </h1>
          <p
            className={styles.heroSubText}
            style={{ color: themeColors.textSecondary }}
          >
            I solve All your TECH problems
            <br className="sm:block hidden" />
            and Build applications
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            {[
              {
                href: "https://github.com/haithem-khomri",
                icon: FaGithub,
              },
              {
                href: "https://www.linkedin.com/in/haithem-khomri-391764260/",
                icon: FaLinkedin,
              },
              {
                href: "https://www.instagram.com/haithem.kho/",
                icon: FaInstagram,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-accent transition-colors duration-300"
                style={{ color: themeColors.text }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2"
            style={{ borderColor: themeColors.secondary }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: themeColors.secondary }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center mt-2"
            style={{ color: themeColors.secondary }}
          >
            <BiMouseAlt className="text-2xl" />
            <BsArrowDown className="text-xl animate-bounce" />
          </motion.div>
        </a>
      </div>

      <div className="absolute inset-0 z-[-1]">
        <HeroScene />
      </div>
    </section>
  );
};

export default Hero;
