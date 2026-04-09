import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A2F] text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sanskar.dev
          </h1>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://github.com/Sanskarspandey" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sanskar-pandey-188913238/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:sanskar.p.work@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>

          <p className="text-sm text-gray-400">Email</p>
          <p className="mb-3">sanskar.p.work@gmail.com</p>

          <p className="text-sm text-gray-400">Phone</p>
          <p className="mb-3">+91 9372948245</p>

          <p className="text-sm text-gray-400">Location</p>
          <p>Mumbai, India</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 px-6 md:px-16 flex flex-col md:flex-row justify-between text-sm text-gray-400">

        <p>Made with ❤️ by Sanskar Pandey</p>

        <p>Built with React, Tailwind CSS</p>

        <p>© 2025 Sanskar Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
}