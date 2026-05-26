'use client';

import React, { useState } from 'react';
import { Check, Phone, Mail, MapPin } from 'lucide-react';

export default function Zero2WorkLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/contact@zero2work.com', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', role: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const testimonials = [
    {
      text: "Every morning I wake up to jobs already matched to my salary requirements and skills — and they're already applied. I've only been using it for two weeks and I already have interviews.",
      author: "John R.",
      highlight: true
    },
    {
      text: "Zero2Work helped me update my resume and cover letter — and the interviews started rolling in almost immediately. I highly recommend their services to anyone looking to move their career forward.",
      author: "Kelly H."
    },
    {
      text: "I had been struggling to get interviews for months. Zero2Work completely repositioned my experience and I started landing multiple interviews right away — and finally got the job I had been working toward.",
      author: "Sam K."
    },
    {
      text: "My resume was working against me — my experience was making me look dated instead of qualified. Zero2Work fixed that. They repositioned my background so it read as an asset, not a liability, and the interviews followed.",
      author: "Christine S."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f0f1e] to-slate-950 text-white overflow-hidden">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-purple-400">Zero</span>2Work
          </div>
          <a href="#contact" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Why ChatGPT Resumes Don't Work Anymore</h1>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-8 mb-8">
              <p className="text-lg text-slate-200 mb-6 leading-relaxed">You applied with a ChatGPT resume. Got nothing back.</p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">Here's why: Most companies use automated screening software that now detects AI-written content. When it finds ChatGPT, it rejects your application automatically — <span className="text-purple-300 font-semibold">before a human ever sees it</span>.</p>
              <p className="text-lg text-slate-300 leading-relaxed">You're not getting rejected because you're not qualified. You're getting rejected by a robot that flagged your resume as AI-generated.</p>
            </div>
            <p className="text-xl text-slate-300">That's why professionally written resumes work. They pass the screening. Get to a human. Get you interviews.</p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-16"></div>
        </div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/30 to-slate-900/80 border-2 border-purple-500/40 p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full mb-6">LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Premier Package</h2>
              <p className="text-xl text-slate-300 mb-10">30 days. Professional resume. Cover letter. Daily job applications matched to your salary and skills.</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">AI-optimized resume that passes automated screening</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Professional cover letter tailored to your industry</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Daily job applications matched to your qualifications</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Automatic salary and job skill matching</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-200">Daily emails of submitted applications to review</span>
                </div>
              </div>
              <div className="mb-10 pb-10 border-b border-purple-500/30">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold text-purple-300">$498</span>
                  <span className="text-xl text-slate-400">for 30 days</span>
                </div>
                <p className="text-slate-400">One-time payment. Your resume + one month of job applications.</p>
              </div>
              <a href="#contact" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg transition-colors">Claim Your Spot</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Real Results. Real Timeline.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`rounded-xl p-8 transition-all ${testimonial.highlight ? 'bg-gradient-to-br from-purple-900/40 to-slate-900/80 border-2 border-purple-500/40 md:col-span-2' : 'bg-slate-900/50 border border-purple-500/20'}`}>
                <p className={`${testimonial.highlight ? 'text-lg' : 'text-base'} text-slate-200 mb-6 leading-relaxed`}>"{testimonial.text}"</p>
                <p className="font-semibold text-purple-300">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Ready to Get Hired?</h2>
          <p className="text-center text-slate-400 mb-16">Fill out the form below or reach out directly.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Started</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleFormChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleFormChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">What type of role are you targeting?</label>
                  <input type="text" name="role" value={formData.role} onChange={handleFormChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g., Senior Manager, Marketing Director" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Anything else we should know?</label>
                  <textarea name="message" value={formData.message} onChange={handleFormChange} rows="3" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell us about your background..." />
                </div>
                <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">Claim Your Spot</button>
                {submitted && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200 text-center text-sm">
                    ✓ Got it! We'll be in touch within hours.
                  </div>
                )}
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Or reach out directly</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:contact@zero2work.com" className="text-lg text-purple-300 hover:text-purple-200 break-all">contact@zero2work.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:+18782884106" className="text-lg text-purple-300 hover:text-purple-200">(878) 288-4106</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-lg text-slate-200">Pittsburgh, PA</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-purple-500/20">
                <p className="text-sm text-slate-400 mb-4"><span className="text-purple-300 font-semibold">Also available:</span> Resume and cover letter rewrites. Reach out to discuss options that fit your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-purple-500/10 text-center text-slate-500 text-sm">
        <p>© 2026 Zero2Work. All rights reserved.</p>
      </footer>
    </div>
  );
}
