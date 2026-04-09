import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  const roles = [
    "Problem Solver",
    "Full Stack Developer",
    "MERN Stack Specialist",
    "AI/ML Explorer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1),
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  const icons = [
    { icon: <FaReact />, color: "bg-blue-500", name: "React" },
    { icon: <SiJavascript />, color: "bg-yellow-400", name: "JavaScript" },
    { icon: <FaNodeJs />, color: "bg-green-500", name: "Node.js" },
    { icon: <SiMongodb />, color: "bg-green-700", name: "MongoDB" },
    { icon: <FaPython />, color: "bg-yellow-500", name: "Python" },
    { icon: <SiTailwindcss />, color: "bg-cyan-400", name: "Tailwind CSS" },
  ];

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-between px-6 md:px-20 pt-28 overflow-hidden"
    >
      {/* 🌈 EXACT BACKGROUND FEEL */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-200"></div>

      {/* LEFT */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Sanskar
          </span>
        </h1>

        {/* TYPEWRITER */}
        <h2 className="text-3xl font-semibold text-indigo-400 mt-4 h-[40px]">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="mt-5 text-gray-600">
          3rd year B.Tech student at{" "}
          <span className="text-blue-600 font-semibold">VIT Chennai</span>{" "}
          specializing in AI/ML.
        </p>

        <p className="mt-2 text-purple-600 font-medium">
          Crafting digital experiences that bridge innovation with real-world
          impact.
        </p>

        {/* TAGS */}
        <div className="flex gap-3 mt-6 flex-wrap">
          {["3rd Year B.Tech", "AI/ML Specialist", "Full Stack Dev"].map(
            (tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white shadow-md rounded-full text-sm"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:scale-105 transition">
            🚀 Explore My Work
          </button>

          <a
            href="https://drive.google.com/file/d/1p7a3yUic4UmMdEVpe6S7F6g33UyKkOmp/view"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border shadow-sm bg-white"
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/Sanskarspandey"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-lg hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sanskar-pandey-188913238/"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-lg hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sanskar.p.work@gmail.com"
            className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-lg hover:scale-110 transition"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-[400px] h-[400px] hidden md:flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute w-full h-full rounded-full border-2 border-dashed border-indigo-300"
        />

        <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-300"></div>

        {icons.map((item, i) => {
          const angle = (i / icons.length) * 2 * Math.PI;
          const radius = 150;

          return (
            <div
              key={i}
              className="absolute group"
              style={{
                transform: `translate(${radius * Math.cos(angle)}px, ${
                  radius * Math.sin(angle)
                }px)`,
              }}
            >
              {/* ICON */}
              <div
                className={`w-14 h-14 flex items-center justify-center text-white rounded-xl shadow-lg ${item.color} 
        hover:scale-110 transition duration-300`}
              >
                {item.icon}
              </div>

              {/* TOOLTIP */}
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 
        bg-black text-white text-xs px-2 py-1 rounded opacity-0 
        group-hover:opacity-100 transition whitespace-nowrap"
              >
                {item.name}
              </div>
            </div>
          );
        })}

        <div className="w-44 h-44 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white">
          SP
        </div>
      </div>

      {/* ⬇ SCROLL BUTTON */}
      <div
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl cursor-pointer animate-bounce"
      >
        ↓
      </div>
    </section>
  );
}
