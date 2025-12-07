import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">Get in Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Info Side */}
          <div className="bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-slate-400 mb-12">
                Have questions about admissions, courses, or partnerships? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="text-mct-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-slate-400">123 Creative Avenue, Tech City, ST 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="text-mct-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="text-mct-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-slate-400">info@mct.edu</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-mct-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Form Side */}
          <div className="p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-mct-500 focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-mct-500 focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-mct-500 focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full bg-mct-600 text-white py-3 rounded-lg font-semibold hover:bg-mct-700 transition-colors flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-mct-600 font-medium hover:underline">Send another message</button>
              </div>
            )}
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-80 bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-2 opacity-50" />
              <p>Google Map Integration</p>
            </div>
          </div>
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{border:0, opacity: 0.6}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};