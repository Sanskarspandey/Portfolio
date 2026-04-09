import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cd6zmx4",
        "template_m0wnyzg",
        form.current,
        "YX0vpQcDOZLUt869N"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900">

      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Get In <span className="text-indigo-500">Touch</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Interested in collaborating on a project, need assistance with development,
          or just want to say hi? Feel free to reach out!
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <FaEnvelope className="text-2xl text-indigo-500 mx-auto mb-3" />
          <h3 className="font-semibold">Email Me</h3>
          <a
            href="mailto:sanskar.p.work@gmail.com"
            className="text-sm text-indigo-500"
          >
            sanskar.p.work@gmail.com
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <FaPhone className="text-2xl text-indigo-500 mx-auto mb-3" />
          <h3 className="font-semibold">Call Me</h3>
          <p className="text-sm text-indigo-500">+91 9372948245</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <FaLinkedin className="text-2xl text-indigo-500 mx-auto mb-3" />
          <h3 className="font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/sanskar-pandey-188913238/"
            target="_blank"
            className="text-sm text-indigo-500"
          >
            Connect with me
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <FaGithub className="text-2xl text-indigo-500 mx-auto mb-3" />
          <h3 className="font-semibold">GitHub</h3>
          <a
            href="https://github.com/Sanskarspandey"
            target="_blank"
            className="text-sm text-indigo-500"
          >
            View my code
          </a>
        </div>

      </div>

      {/* FORM */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h3 className="text-center text-xl font-semibold mb-6">
          Send a Message
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border w-full dark:bg-gray-900"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border w-full dark:bg-gray-900"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 rounded-lg border w-full dark:bg-gray-900"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg border w-full dark:bg-gray-900"
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}