import { Award, Calendar, ExternalLink } from "lucide-react";

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
      className="px-3 pb-16 pt-20 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-neutral-500 tracking-wider uppercase text-sm">
              Certificates
            </span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <h2 className="text-center text-neutral-100 text-2xl md:text-3xl font-semibold">
            Certifications & Achievements
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-4 rounded-xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80 flex flex-col"
            >
              {/* Top Content */}
              <div className="flex-1">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg border border-neutral-700">
                  <Award className="w-5 h-5 text-neutral-300" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-neutral-100 text-sm md:text-base font-medium">
                  {cert.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-3">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Verify Link – pinned to bottom */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-xs text-neutral-300 hover:text-neutral-100 transition-colors"
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
}

export default Certificate;
