import React from 'react';
import { NEWS_DATA } from '../../constants';
import { Calendar, Tag } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">News & Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-200 relative">
                 <img src={`https://picsum.photos/seed/news${item.id}/600/300`} alt={item.title} className="w-full h-full object-cover" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                   <Tag size={12} /> {item.type}
                 </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.summary}</p>
                <button className="text-mct-600 font-semibold text-sm hover:underline">Read More &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};