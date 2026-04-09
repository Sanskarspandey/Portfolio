import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

/* CARD */
function SkillCard({ icon, title, desc, color }) {
  return (
    <div id="skills" className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center relative overflow-hidden">
      {/* GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-100 to-purple-100"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <div
          className={`w-14 h-14 mx-auto flex items-center justify-center rounded-xl text-white text-2xl bg-gradient-to-br ${color} shadow-md`}
        >
          {icon}
        </div>

        <h4 className="mt-4 font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center">
        My <span className="text-indigo-500">Skills</span>
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Showcasing my technical expertise and tools I use
      </p>

      {/* FRONTEND */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
          🎨 Frontend Development
        </h3>
        <p className="text-sm text-gray-500">
          Creating beautiful and responsive UI
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <SkillCard
            icon={<FaReact />}
            title="React"
            desc="UI Library"
            color="from-blue-400 to-blue-600"
          />
          <SkillCard
            icon={<SiJavascript />}
            title="JavaScript"
            desc="Core Language"
            color="from-yellow-300 to-yellow-500"
          />
          <SkillCard
            icon={<SiTailwindcss />}
            title="Tailwind"
            desc="CSS Framework"
            color="from-cyan-300 to-cyan-500"
          />
          <SkillCard
            icon={<FaHtml5 />}
            title="HTML5"
            desc="Markup"
            color="from-orange-400 to-orange-600"
          />
          <SkillCard
            icon={<FaCss3Alt />}
            title="CSS3"
            desc="Styling"
            color="from-blue-500 to-blue-700"
          />
          <SkillCard
            icon={<SiBootstrap />}
            title="Bootstrap"
            desc="UI Toolkit"
            color="from-purple-400 to-purple-600"
          />
        </div>
      </div>

      {/* BACKEND */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
          ⚙️ Backend Development
        </h3>
        <p className="text-sm text-gray-500">
          Building scalable backend systems
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <SkillCard
            icon={<FaNodeJs />}
            title="Node.js"
            desc="Runtime"
            color="from-green-400 to-green-600"
          />
          <SkillCard
            icon={<SiExpress />}
            title="Express"
            desc="Framework"
            color="from-gray-500 to-gray-800"
          />
          <SkillCard
            icon={<FaPython />}
            title="Python"
            desc="Backend & AI"
            color="from-yellow-400 to-yellow-600"
          />
          <SkillCard
            icon={<SiMongodb />}
            title="MongoDB"
            desc="NoSQL DB"
            color="from-green-500 to-green-700"
          />
          <SkillCard
            icon={<SiPostgresql />}
            title="PostgreSQL"
            desc="Relational DB"
            color="from-blue-500 to-blue-700"
          />
        </div>
      </div>

      {/* TOOLS */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
          🛠 Tools & Technologies
        </h3>
        <p className="text-sm text-gray-500">
          Development tools and workflow optimization
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <SkillCard
            icon={<FaGitAlt />}
            title="Git"
            desc="Version Control"
            color="from-orange-500 to-orange-700"
          />
          <SkillCard
            icon={<FaDocker />}
            title="Docker"
            desc="Containers"
            color="from-blue-400 to-blue-600"
          />
          <SkillCard
            icon={<SiPostman />}
            title="Postman"
            desc="API Testing"
            color="from-orange-400 to-orange-600"
          />
        </div>
      </div>

      {/* ADDITIONAL */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold">
          Additional <span className="text-indigo-500">Technologies</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Machine Learning",
            "REST APIs",
            "JWT Authentication",
            "Responsive Design",
            "Database Design",
            "Version Control",
            "API Development",
            "Frontend Architecture",
            "State Management",
            "Agile Development",
            "Testing",
            "Performance Optimization",
          ].map((item, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full text-sm shadow transition
                bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700
      }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* GRADIENT BANNER */}
      <div className="mt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-12 rounded-3xl text-center shadow-xl">
        <h3 className="text-2xl font-semibold">Continuous Learning Journey</h3>

        <p className="text-sm mt-4 max-w-xl mx-auto opacity-90">
          Technology evolves rapidly, and I continuously explore AI/ML, cloud
          computing, and modern web technologies.
        </p>

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {["AI/ML", "Cloud", "DevOps", "Blockchain"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1 bg-white/20 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
