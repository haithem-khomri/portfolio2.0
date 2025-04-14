import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
// Replace the asset imports with React Icons
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { themeColors } = useContext(ThemeContext);
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId);
      setToggle(false);
    }
  };

  // Remove these lines since we're using React Icons components
  // const menuIcon = menu || '/menu.svg';
  // const closeIcon = close || '/close.svg';

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 backdrop-blur-sm`}
      style={{
        backgroundColor: scrolled ? themeColors.navBg : "transparent",
        boxShadow: scrolled ? `0 4px 20px ${themeColors.shadowColor}` : "none",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p
            className="text-[18px] font-bold cursor-pointer flex"
            style={{ color: themeColors.text }}
          >
            Haithem Abdelkahar KHOMRI &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              style={{
                color:
                  active === link.id
                    ? themeColors.text
                    : themeColors.textSecondary,
                borderBottom:
                  active === link.id
                    ? `2px solid ${themeColors.accent}`
                    : "none",
                paddingBottom: "5px",
              }}
              onClick={() => scrollToSection(link.id)}
            >
              <span>{link.title}</span>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Replace img tag with React Icon component */}
          {toggle ? (
            <HiX
              className="w-[28px] h-[28px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
              style={{ color: themeColors.text }}
            />
          ) : (
            <HiMenu
              className="w-[28px] h-[28px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
              style={{ color: themeColors.text }}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}
            style={{
              backgroundColor: themeColors.surface,
              boxShadow: `0 10px 25px ${themeColors.shadowColor}`,
            }}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-medium cursor-pointer text-[16px] transition-colors duration-300`}
                  style={{
                    color:
                      active === link.id
                        ? themeColors.accent
                        : themeColors.text,
                  }}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
