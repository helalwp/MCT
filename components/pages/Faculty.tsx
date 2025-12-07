import React, { useState } from 'react';
import { Search, Mail, Phone, Award } from 'lucide-react';
import { FACULTY_DATA } from '../../constants';

export const Faculty: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = FACULTY_DATA.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Faculty</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our department is home to industry veterans and academic scholars dedicated to mentoring the next generation of creative technologists.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search by name or expertise..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mct-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold">Specializations:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {member.expertise.map(exp => (
                        <span key={exp} className="text-xs bg-mct-500/80 px-2 py-1 rounded">{exp}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-mct-600 font-medium text-sm mb-4">{member.designation}</p>
                
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-slate-400" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" />
                    <a href={`mailto:${member.email}`} className="hover:text-mct-600">{member.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-slate-400" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No faculty members found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};