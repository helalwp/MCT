import React from 'react';
import { ArrowRight, Trophy, Users, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS_DATA } from '../../constants';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <div className="relative bg-slate-900 h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/tech/1920/1080" 
            alt="MCT Lab" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovate. Design. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mct-500 to-indigo-400">Create the Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            Welcome to the Department of Multimedia & Creative Technology. 
            Merging art with engineering to shape the digital world.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link to="/courses" className="bg-mct-600 hover:bg-mct-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center">
              About Dept
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Empowering Creative Minds</h2>
            <p className="text-slate-600 leading-relaxed">
              The MCT department is dedicated to producing world-class professionals in the fields of multimedia, graphic design, web engineering, and animation. Our curriculum is designed to bridge the gap between artistic creativity and technical proficiency.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-mct-50 rounded-xl">
                <Users className="text-mct-600 mb-2" size={24} />
                <div className="font-bold text-2xl text-slate-900">500+</div>
                <div className="text-sm text-slate-500">Graduates</div>
              </div>
              <div className="p-4 bg-indigo-50 rounded-xl">
                <Trophy className="text-indigo-600 mb-2" size={24} />
                <div className="font-bold text-2xl text-slate-900">35+</div>
                <div className="text-sm text-slate-500">Awards Won</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-mct-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg"></div>
            <img 
              src="https://picsum.photos/seed/students/800/600" 
              alt="Students collaborating" 
              className="relative rounded-2xl shadow-lg w-full object-cover transform transition-transform group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>

      {/* Success Story / Feature */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story of the Month</h2>
            <div className="h-1 w-20 bg-mct-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-2xl">
            <img 
              src="https://picsum.photos/seed/success/400/400" 
              alt="Success Story" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-mct-500"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-mct-500/20 text-mct-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Alumni Spotlight
              </div>
              <h3 className="text-2xl font-bold mb-2">Sarah Jenkins & Team 'PixelPerfect'</h3>
              <p className="text-slate-400 mb-6 italic">
                "Winning the National Web Dev Hackathon was a dream come true. The rigorous projects at MCT prepared us for the tight deadlines and complex problem-solving."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-700 pt-6">
                <div>
                  <div className="text-mct-400 font-bold">Achievement</div>
                  <div className="text-sm text-slate-400">1st Place National Hackathon</div>
                </div>
                <div>
                  <div className="text-mct-400 font-bold">Year</div>
                  <div className="text-sm text-slate-400">2023</div>
                </div>
                <div>
                  <div className="text-mct-400 font-bold">Role</div>
                  <div className="text-sm text-slate-400">Lead Frontend Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-mct-600 font-medium uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};