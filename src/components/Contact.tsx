import { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { themeColors } = useContext(ThemeContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Reset status messages when user starts typing again
    setSuccess(false);
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Replace these with your actual EmailJS credentials
    const serviceId = "service_8pbjdam"; // e.g., "service_abc123"
    const templateId = "template_4i4v17d"; // e.g., "template_xyz789"
    const publicKey = "r4RG_jOA4X91Yv4cw"; // e.g., "user_abcdefg123456"

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Haithem abdelkahar KHOMRI", // Replace with your name
          from_email: form.email,
          to_email: "haithemkho@gmail.com", // Replace with your email
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.error("Email error:", error);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
        style={{ backgroundColor: themeColors.tertiary }}
      >
        <p
          className={styles.sectionSubText}
          style={{ color: themeColors.textSecondary }}
        >
          Get in touch
        </p>
        <h3
          className={styles.sectionHeadText}
          style={{ color: themeColors.text }}
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span
              style={{ color: themeColors.text }}
              className="font-medium mb-4"
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 rounded-lg outlined-none border-none font-medium"
              style={{
                backgroundColor: themeColors.surface,
                color: themeColors.text,
                border: `1px solid ${themeColors.border}`,
              }}
              required
            />
          </label>
          <label className="flex flex-col">
            <span
              style={{ color: themeColors.text }}
              className="font-medium mb-4"
            >
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 rounded-lg outlined-none border-none font-medium"
              style={{
                backgroundColor: themeColors.surface,
                color: themeColors.text,
                border: `1px solid ${themeColors.border}`,
              }}
              required
            />
          </label>
          <label className="flex flex-col">
            <span
              style={{ color: themeColors.text }}
              className="font-medium mb-4"
            >
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4 px-6 rounded-lg outlined-none border-none font-medium"
              style={{
                backgroundColor: themeColors.surface,
                color: themeColors.text,
                border: `1px solid ${themeColors.border}`,
              }}
              required
            />
          </label>

          {success && (
            <div className="py-3 px-4 rounded-lg bg-green-500/20 text-green-500 font-medium">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {error && (
            <div className="py-3 px-4 rounded-lg bg-red-500/20 text-red-500 font-medium">
              Something went wrong. Please try again later.
            </div>
          )}

          <button
            type="submit"
            className="py-3 px-8 outline-none w-fit font-bold shadow-md rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: themeColors.accent,
              color: "#ffffff",
            }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
