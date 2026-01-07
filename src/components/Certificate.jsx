import { Award, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const certificates = [
  {
    id: 1,
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "July 2023",
    verifyUrl:
      "https://www.freecodecamp.org/certification/ao_zora/responsive-web-design",
  },
  {
    id: 2,
    title: "Legacy JavaScript Algorithms and Data Structures V8",
    issuer: "freeCodeCamp",
    date: "June 2025",
    verifyUrl:
      "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: 3,
    title: "Front End Development Libraries V8",
    issuer: "freeCodeCamp",
    date: "July 2025",
    verifyUrl:
      "https://www.freecodecamp.org/certification/ao_zora/front-end-development-libraries",
  },
  {
    id: 4,
    title: "Legacy JavaScript Algorithm and Data Structures V7",
    issuer: "freeCodeCamp",
    date: "June 2025",
    verifyUrl:
      "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures",
  },
];

export function Certificate() {
  return (
    <section
      id="certi"
      className="px-3 pb-20 pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-800" />
            <span className="tracking-wider uppercase text-sm text-neutral-600 dark:text-neutral-500">
              Certificates
            </span>
            <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-800" />
          </div>

          <h2 className="text-center text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            Certifications & Achievements
          </h2>
        </div>

        {/* Certificates Grid (ONLY 4) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {certificates.slice(0, 4).map((cert) => (
            <div
              key={cert.id}
              className="group relative p-4 rounded-xl border flex flex-col transition-all duration-300
                bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400
                dark:bg-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-900/80 dark:hover:border-neutral-700"
            >
              <div className="flex-1">
                <div className="mb-4 inline-flex p-3 rounded-lg border border-gray-300 dark:border-neutral-700">
                  <Award className="w-5 h-5 text-gray-600 dark:text-neutral-300" />
                </div>

                <h3 className="mb-2 text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {cert.title}
                </h3>

                <p className="text-sm mb-3 text-gray-700 dark:text-neutral-400">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-xs text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              >
                Verify
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/certificates"
            className="px-6 py-2 text-sm rounded-lg border
              border-neutral-300 text-neutral-700 hover:bg-neutral-100
              dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800
              transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
