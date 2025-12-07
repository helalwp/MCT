import React, { useState } from 'react';
import { Book, Clock, Layers } from 'lucide-react';
import { COURSES_DATA } from '../../constants';

export const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const semesters = Array.from(new Set(COURSES_DATA.map(c => c.semester))).sort();
  
  const filteredCourses = activeTab === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.semester === activeTab);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Academic Curriculum</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A balanced mix of theoretical foundations and practical applications designed to make you industry-ready.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'all' 
                ? 'bg-mct-600 text-white shadow-lg shadow-mct-500/30' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Courses
          </button>
          {semesters.map(sem => (
             <button
             key={sem}
             onClick={() => setActiveTab(sem)}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
               activeTab === sem 
                 ? 'bg-mct-600 text-white shadow-lg shadow-mct-500/30' 
                 : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
             }`}
           >
             Semester {sem}
           </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.code} className="border border-slate-200 rounded-xl p-6 hover:border-mct-300 hover:shadow-md transition-all group bg-white">
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                  course.type === 'Core' ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {course.type}
                </div>
                <div className="text-slate-400 font-mono text-sm">{course.code}</div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-mct-600 transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <Layers size={16} />
                  <span>Sem {course.semester}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{course.credits} Credits</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};