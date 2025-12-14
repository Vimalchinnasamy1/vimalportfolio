import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Design Thinking',
    provider: 'NPTEL',
    icon: '🎨',
  },
  {
    title: 'Big Data Computing',
    provider: 'NPTEL',
    icon: '📊',
  },
  {
    title: 'Industrial IoT 4.0',
    provider: 'NPTEL',
    icon: '🏭',
  },
  {
    title: 'Python for Data Science',
    provider: 'IBM',
    icon: '🐍',
  },
  {
    title: 'Data Analytics with Python',
    provider: 'IBM',
    icon: '📈',
  },
  {
    title: 'Japanese Language Proficiency Test (N5)',
    provider: 'JLPT',
    icon: '🇯🇵',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border-2 border-transparent hover:border-cyan-400"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm text-slate-600 font-medium">
                      {cert.provider}
                    </span>
                  </div>
                </div>

                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
