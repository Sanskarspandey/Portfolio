import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* PROJECT DATA */
const projects = [
  {
    title: "Solveathon Website",
    type: "Frontend",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc: "Official website for Solveathon hackathon event.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "V-NEST Demo Portal",
    type: "Full Stack",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    desc: "Platform showcasing V-NEST ecosystem.",
    tech: ["React", "Next.js", "PostgreSQL"],
  },
  {
    title: "Finance Manager",
    type: "Full Stack",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    desc: "Portfolio management with AI recommendations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "Wanderlust",
    type: "Full Stack",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    desc: "Airbnb clone with listings & maps.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

/* CARD */
function ProjectCard({ project, onClick }) {
  return (
    <div id="projects" className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* IMAGE */}
      <div className="relative">
        <img src={project.image} className="w-full h-48 object-cover" />

        {/* FEATURED BADGE */}
        {project.featured && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 text-xs rounded-full">
            ⭐ Featured
          </span>
        )}

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <button
            onClick={onClick}
            className="bg-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
          >
            👁 Explore Project
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {project.type}
        </span>

        <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{project.desc}</p>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <button className="p-2 bg-indigo-500 text-white rounded-md">
              <FaExternalLinkAlt />
            </button>
            <button className="p-2 bg-gray-200 rounded-md">
              <FaGithub />
            </button>
          </div>

          <button
            onClick={onClick}
            className="text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg"
          >
            Explore →
          </button>
        </div>
      </div>
    </div>
  );
}
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      {/* MODAL BOX */}
      <div className="relative bg-white w-[95%] max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition text-xl font-bold z-10"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={project.image}
          className="w-full h-64 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">

          <h2 className="text-2xl font-bold">{project.title}</h2>

          <p className="mt-3 text-gray-600 leading-relaxed">
            A comprehensive financial management platform built with the MERN stack.
            Features include real-time stock tracking, portfolio analytics, and AI-powered insights.
          </p>

          {/* FEATURES */}
          <h3 className="mt-6 font-semibold text-lg">Key Features</h3>

          <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm text-gray-600">
            <p>• Real-time stock data</p>
            <p>• AI-powered insights</p>
            <p>• JWT Authentication</p>
            <p>• Responsive UI</p>
          </div>

          {/* TECH */}
          <h3 className="mt-6 font-semibold text-lg">Technologies Used</h3>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg flex items-center gap-2">
              🔗 Live Demo
            </button>

            <button className="border px-5 py-2 rounded-lg flex items-center gap-2">
              <FaGithub /> View Code
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center">
        Featured <span className="text-indigo-500">Projects</span>
      </h2>

      <p className="text-center text-gray-500 mt-3 max-w-xl mx-auto">
        Discover my projects showcasing innovation and real-world impact.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onClick={() => setSelected(p)} />
        ))}
      </div>

      {/* MODAL */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}