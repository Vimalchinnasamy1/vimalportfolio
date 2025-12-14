import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-400/30">
              <img
                src="/vimal_professional.jpg"
                alt="Vimal C"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-slideUp">
            Vimal C
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-8 animate-slideUp delay-100">
            Artificial Intelligence & Data Science Undergraduate
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slideUp delay-200">
            <a href="mailto:cvimalchinnasamy@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>cvimalchinnasamy@gmail.com</span>
            </a>
            <a href="tel:+918838377105" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 8838377105</span>
            </a>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-5 h-5" />
              <span>Karur, India</span>
            </div>
          </div>

          <a
            href="#about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 animate-slideUp delay-300"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
