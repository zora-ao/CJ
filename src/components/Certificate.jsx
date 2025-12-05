import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
    {
        id: 1,
        title: "Legacy Responsive Web Design V8",
        issuer: "freeCodeCamp",
        date: "July 2023",
        verifyUrl: "https://www.freecodecamp.org/certification/ao_zora/responsive-web-design"
    },
    {
        id: 2,
        title: "Legacy JavaScript Algorithms and Data Structures V8",
        issuer: "freeCodeCamp",
        date: "June 2025",
        verifyUrl: "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures-v8"
    },
    {
        id: 3,
        title: "Front End Development Libraries V8",
        issuer: "freeCodeCamp",
        date: "July 2025",
        verifyUrl: "https://www.freecodecamp.org/certification/ao_zora/front-end-development-libraries"
    },
    {
        id: 4,
        title: "Legacy JavaScript Algorithm and Data Structures V7",
        issuer: "freeCodeCamp",
        date: "June 2025",
        verifyUrl: "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures"
    }
    ];

    export function Certificate() {

        
    return (
        <section id="certi" className="px-6 pb-10 pt-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-800"></div>
                <span className="text-neutral-500 tracking-wider uppercase text-sm">Certificates</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-800"></div>
            </div>
            <h2 className="text-center text-neutral-50">Certifications & Achievements</h2>
            </div>
            
            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
                <div 
                key={cert.id}
                className="group relative p-6 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <Award className="w-6 h-6 text-purple-400" />
                </div>
                
                {/* Content */}
                <h3 className="mb-2 text-neutral-50">
                    {cert.title}
                </h3>
                <p className="text-neutral-400 mb-4">
                    {cert.issuer}
                </p>
                
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                </div>
                
                
                {/* Verify Link */}
                <a 
                    href={cert.verifyUrl}
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                    Verify Certificate
                    <ExternalLink className="w-3.5 h-3.5" />
                </a>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Certificate;