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
      <nav className="fixed top-0 w-full bg-slate-950/
