import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-neutral-100 text-lg font-medium">
              Carl
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Web Developer • Building clean & modern web experiences
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-neutral-400 text-xl">
            <a
              href="https://github.com/ao_zora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:text-neutral-100 transition"
            >
              <CgMail />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-neutral-800" />

        {/* Bottom */}
        <div className="text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Carl. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
