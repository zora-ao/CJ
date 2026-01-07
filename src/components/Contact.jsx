import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { useTheme } from "../contexts/themeContext";

const Contact = () => {
  const { themeMode } = useTheme();

  return (
    <footer
      id="contact"
      className={`transition-colors duration-300 border-t scroll-mt-40 py-2 mt-6 md:mt-0 ${
        themeMode === "dark"
          ? "backdrop-blur-2xl bg-neutral-950 border-neutral-800 text-neutral-100"
          : "bg-white border-gray-300 text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-2">
              Let's Connect!
            </h3>
            <p className={`text-sm ${
              themeMode === "dark" ? "text-neutral-400" : "text-gray-600"
            }`}>
              I’m open to freelance projects, collaborations, or just a friendly chat.
              Feel free to reach out via email or connect with me on LinkedIn!
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="mailto:carljasperramos5@gmail.com"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/carl-jasper-ramos-4262613a5/"

                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg border transition ${
                  themeMode === "dark"
                    ? "border-neutral-600 hover:bg-neutral-800 text-neutral-100"
                    : "border-gray-300 hover:bg-gray-100 text-neutral-900"
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-2xl mt-6 md:mt-0 justify-center md:justify-end">
            <a
              href="https://github.com/zora-ao"
              
              rel="noopener noreferrer"
              className={`transition ${
                themeMode === "dark" ? "text-neutral-400 hover:text-neutral-100" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/carl-jasper-ramos-4262613a5/"
             
              rel="noopener noreferrer"
              className={`transition ${
                themeMode === "dark" ? "text-neutral-400 hover:text-neutral-100" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:carljasperramos5@gmail.com"
              className={`transition ${
                themeMode === "dark" ? "text-neutral-400 hover:text-neutral-100" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <CgMail />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-8 h-px ${
          themeMode === "dark" ? "bg-neutral-800" : "bg-gray-300"
        }`} />

        {/* Bottom */}
        <div className={`text-center text-sm ${
          themeMode === "dark" ? "text-neutral-500" : "text-gray-500"
        }`}>
          © {new Date().getFullYear()} Carl. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
