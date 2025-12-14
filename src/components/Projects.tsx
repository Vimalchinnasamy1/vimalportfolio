import { Briefcase, Calendar, Tag } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Website for Gardening Products',
    role: 'Full Stack Web Developer',
    duration: '2023 – 2024',
    description: [
      'Designed and developed a responsive web platform for selling gardening products',
      'Integrated online payment gateway and user authentication',
      'Enabled local artisan visibility through dynamic profile and product management',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Backend Integration', 'Database Systems'],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Hospital Management System',
    role: 'Database Designer',
    duration: '2023 – 2024',
    description: [
      'Designed optimized database schemas for patient, billing, and appointment modules',
      'Streamlined backend operations using SQL and visual modeling with Mural',
      'Ensured data integrity and scalability across departments',
    ],
    technologies: ['SQL', 'Database Design', 'Mural'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Automated Bus Scheduling and Route Management System',
    role: 'Project Leader',
    duration: '2024 – 2025',
    description: [
      'Led development of smart transport system with live traffic-based route optimization',
      'Integrated TomTom Maps API for bus stops, routes, and congestion visualization',
      'Coordinated UI development and API integration',
    ],
    technologies: ['Java', 'APIs', 'TomTom Maps API', 'Web Technologies'],
    gradient: 'from-slate-600 to-slate-700',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Briefcase className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full font-semibold">
                      <Briefcase className="w-4 h-4" />
                      {project.role}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200 text-slate-700 rounded-full font-medium">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {project.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-semibold text-slate-900">Technologies Used:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:border-cyan-500 hover:text-cyan-700 hover:bg-cyan-50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
