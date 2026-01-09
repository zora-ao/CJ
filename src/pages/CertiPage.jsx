import React from "react";
import { Award, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(); 

  return (
    <section className="px-4 py-16 bg-white dark:bg-neutral-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-12">
          <button
            onClick={() => navigate("/")}
            className="
              mb-4 md:mb-0
              flex items-center gap-2 text-sm font-medium
              text-gray-700 hover:text-gray-900
              dark:text-neutral-300 dark:hover:text-neutral-100
              transition-colors
              md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
        </button>
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              All Certifications
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              A complete list of my achievements and certifications
            </p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {certificates.map((cert) => (
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
      </div>
    </section>
  );
};

export default CertiPage;
