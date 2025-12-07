import React from 'react';
import { Target, Lightbulb, History } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About MCT</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Blending creativity with technology to shape the future of digital expression.</p>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* History */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4 text-mct-600">
              <History size={28} />
              <span className="font-bold text-lg uppercase tracking-wider">Our History</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Innovation</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Established in 2005, the Department of Multimedia and Creative Technology started with a small cohort of 30 students passionate about digital arts.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over the last two decades, we have evolved into a premier hub for technological creativity, boasting state-of-the-art labs for VR/AR, sound engineering, and 3D animation. Our alumni now work at top global tech and media firms.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-mct-200 rounded-3xl transform rotate-3"></div>
             <img src="https://picsum.photos/seed/history/600/400" alt="Old department photo" className="relative rounded-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To provide a dynamic learning environment that fosters technical proficiency, artistic sensitivity, and ethical responsibility. We aim to empower students to become leaders in the rapidly evolving landscape of multimedia technology.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-mct-100 text-mct-600 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To be a globally recognized center of excellence where technology and creativity converge to solve human-centric problems and create meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-mct-400 mb-2">15+</div>
              <div className="text-sm opacity-70">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mct-400 mb-2">20+</div>
              <div className="text-sm opacity-70">PhD Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mct-400 mb-2">8</div>
              <div className="text-sm opacity-70">Modern Labs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mct-400 mb-2">100%</div>
              <div className="text-sm opacity-70">Passion</div>
            </div>
        </div>
      </div>
    </div>
  );
};