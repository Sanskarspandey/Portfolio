export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        About <span className="text-indigo-500">Me</span>
      </h2>

      <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
        A passionate developer on a mission to create innovative solutions that
        bridge technology and real-world impact
      </p>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {/* LEFT CARD */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Hello! I'm Sanskar Pandey
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm currently a 3rd year B.Tech student specializing in Computer
            Science Engineering with a focus on Artificial Intelligence and
            Machine Learning. My journey in technology began with curiosity and
            has evolved into a passion for creating innovative web applications.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            As a full-stack developer with expertise in the MERN stack, I enjoy
            both frontend and backend development. I'm particularly interested
            in the intersection of web development and AI/ML.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            When I'm not coding, I'm exploring new technologies, contributing to
            open-source projects, and building impactful solutions.
          </p>
        </div>

        {/* RIGHT SIDE (INFO CARDS) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg shadow-sm bg-blue-50 hover:shadow-md transition">
            <h4 className="text-sm font-semibold">📧 Email</h4>
            <p className="text-xs mt-1 text-gray-600">
              sanskar.p.work@gmail.com
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-sm bg-green-50 hover:shadow-md transition">
            <h4 className="text-sm font-semibold">📞 Phone</h4>
            <p className="text-xs mt-1 text-gray-600">+91 9372948245</p>
          </div>

          <div className="p-4 rounded-lg shadow-sm bg-purple-50 hover:shadow-md transition">
            <h4 className="text-sm font-semibold">📍 Location</h4>
            <p className="text-xs mt-1 text-gray-600">Mumbai, India</p>
          </div>

          <div className="p-4 rounded-lg shadow-sm bg-orange-50 hover:shadow-md transition">
            <h4 className="text-sm font-semibold">🎓 Education</h4>
            <p className="text-xs mt-1 text-gray-600">B.Tech (AI/ML)</p>
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mt-14">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center hover:shadow-lg transition">
          <h4 className="text-lg font-semibold">🎓 Education</h4>
          <p className="text-sm text-gray-500 mt-2">
            B.Tech in Computer Science with specialization in AI/ML
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center hover:shadow-lg transition">
          <h4 className="text-lg font-semibold">💻 Passion</h4>
          <p className="text-sm text-gray-500 mt-2">
            Full-stack development with MERN stack and exploring AI/ML
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center hover:shadow-lg transition">
          <h4 className="text-lg font-semibold">🚀 Experience</h4>
          <p className="text-sm text-gray-500 mt-2">
            Building real-world projects and contributing to tech communities
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center hover:shadow-lg transition">
          <h4 className="text-lg font-semibold">🎯 Goal</h4>
          <p className="text-sm text-gray-500 mt-2">
            Creating impactful solutions that bridge technology and real-world
            problems
          </p>
        </div>
      </div>
    </section>
  );
}
