import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'M. Kumarasamy College of Engineering, Karur',
    duration: '2022 – Present',
    grade: 'CGPA: 7.5',
    type: 'Bachelor\'s Degree',
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    institution: 'Bharani Park Matric Hr. Sec. School, Karur',
    duration: '2022',
    grade: 'Percentage: 88.88%',
    type: 'Computer Science',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Venus Matriculation School, Karur',
    duration: '2020',
    grade: 'Percentage: 94.2%',
    type: 'Secondary Education',
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-xl"></div>

              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full mb-2">
                        {edu.type}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-700 font-medium mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-500" />
                      <span className="font-semibold text-slate-900">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
