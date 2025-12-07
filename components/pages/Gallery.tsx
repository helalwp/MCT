import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../constants';
import { Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | '3D' | 'Web' | 'Animation'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-4">Student Showcase</h1>
        <p className="text-center text-slate-600 mb-12">Highlights of the best work created in our labs.</p>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {['All', '3D', 'Web', 'Animation'].map((cat) => (
             <button
             key={cat}
             onClick={() => setFilter(cat as any)}
             className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
               filter === cat 
                 ? 'bg-slate-900 text-white' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-white'
             }`}
           >
             {cat}
           </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-mct-200 mb-4">by {project.studentName}</p>
                  <p className="text-sm text-slate-300 mb-6 max-w-xs mx-auto">{project.description}</p>
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-mct-400 transition-colors flex items-center gap-2 mx-auto">
                    <Eye size={16} /> View Project
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};