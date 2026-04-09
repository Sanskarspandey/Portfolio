import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Research Intern - DRDO",
      duration: "2025",
      desc: "Worked on reinforcement learning for intelligent agent navigation in grid environments.",
      tech: ["Python", "RL", "AI"],
    },
    {
      title: "Justice.AI (Team Project)",
      duration: "2025",
      desc: "Built an AI-powered legal assistant using Vue.js + Flask with GenAI integrations.",
      tech: ["Vue", "Flask", "LLMs"],
    },
    {
      title: "Full Stack Developer",
      duration: "2024 - Present",
      desc: "Developed multiple MERN stack applications including Finance Manager & Airbnb Clone.",
      tech: ["React", "Node", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 px-6 md:px-16">

      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          My <span className="text-indigo-500">Experience</span>
        </h2>
        <p className="text-gray-500 mt-2">
          My journey through internships and real-world projects
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-16 max-w-3xl mx-auto">

        {/* LINE */}
        <div className="absolute left-5 top-0 h-full w-[2px] bg-indigo-200"></div>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative flex items-start gap-6 mb-12"
          >

            {/* ICON */}
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center z-10 shadow-lg">
              <FaBriefcase />
            </div>

            {/* CARD */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full hover:shadow-xl transition">

              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {exp.desc}
              </p>

              {/* TECH TAGS */}
              <div className="flex gap-2 flex-wrap mt-3">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}