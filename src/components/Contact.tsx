import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>

          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:cvimalchinnasamy@gmail.com"
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-slate-300 break-all">cvimalchinnasamy@gmail.com</p>
            </a>

            <a
              href="tel:+918838377105"
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-slate-300">+91 8838377105</p>
            </a>

            <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 group">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-slate-300">Karur, India</p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © 2025 Vimal C. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
