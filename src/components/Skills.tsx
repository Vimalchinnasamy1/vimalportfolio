import { Code, Database, Wrench, Users, Zap, Languages } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Java', 'Python'],
    color: 'from-blue-500 to-slate-600',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['SQL'],
    color: 'from-slate-600 to-slate-700',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['IBM Cognos', 'IBM SPSS', 'Git'],
    color: 'from-slate-700 to-cyan-600',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Teamwork', 'Quick Learner', 'Adaptability'],
    color: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Languages',
    icon: Languages,
    skills: ['Tamil', 'English', 'Japanese'],
    color: 'from-blue-600 to-cyan-500',
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
