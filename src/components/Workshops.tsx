import { BookOpen, MapPin, Calendar } from 'lucide-react';

const workshops = [
  {
    title: 'Web Development Workshop',
    organization: 'Bannari Amman Institute of Technology',
    year: '2024',
    description: 'Hands-on training in HTML, CSS, JavaScript, and React for full-stack development',
  },
];

export default function Workshops() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
          Workshops & Events
        </h2>

        <div className="max-w-4xl mx-auto">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {workshop.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                      <span className="font-medium">{workshop.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-5 h-5 text-cyan-500" />
                      <span className="font-medium">{workshop.year}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
