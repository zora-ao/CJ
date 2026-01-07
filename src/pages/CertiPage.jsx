import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

// Full list of certificates
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
  // You can add more certificates here
];

const CertiPage = () => {
  return (
    <section className="px-4 py-16 bg-white dark:bg-neutral-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            All Certifications
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            A complete list of my achievements and certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-6 rounded-xl border flex flex-col transition-all duration-300
              bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400
              dark:bg-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-900/80 dark:hover:border-neutral-700"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg border border-gray-300 dark:border-neutral-700">
                <Award className="w-6 h-6 text-gray-600 dark:text-neutral-300" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {cert.title}
              </h3>
              <p className="text-sm mb-3 text-gray-700 dark:text-neutral-400">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-neutral-500 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>

              {/* Verify Link */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-2 text-sm text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              >
                Verify
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertiPage;
