import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight } from 'lucide-react';

export default function LeadGenerationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Skin Rejuvenation',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus('submitting');

    try {
      // GOOGLE SHEETS INTEGRATION
      // Replace this URL with your deployed Google Apps Script Web App URL!
      const scriptURL = "https://script.google.com/macros/s/AKfycbz_REPLACE_WITH_YOUR_SCRIPT_ID/exec"; 
      
      // We use no-cors to avoid CORS issues if not configured, or a standard POST if script supports it.
      // Usually, Google Apps Script POST requires URL encoded form data or custom CORS setup.
      // Easiest is sending standard FormData
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('treatment', formData.treatment);
      data.append('message', formData.message);
      data.append('date', new Date().toISOString());

      await fetch(scriptURL, { 
        method: 'POST', 
        body: data,
        mode: 'no-cors' // Use no-cors since we don't need a readable response from App Script usually
      });

      setStatus('success');

      // WHATSAPP REDIRECT INTEGRATION
      const waNumber = "919074714272"; // Replace with your clinic WhatsApp number
      const waMessage = `Hello Aura Skin Clinic,%0A%0AI would like to book a consultation.%0A*Name*: ${formData.name}%0A*Phone*: ${formData.phone}%0A*Interest*: ${formData.treatment}%0A*Message*: ${formData.message}`;
      const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
      
      // Redirect to WhatsApp after 1.5 seconds so user sees success message briefly
      setTimeout(() => {
        window.open(waUrl, "_blank");
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', treatment: 'Skin Rejuvenation', message: '' });
      }, 1500);

    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-32 bg-brand-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-brand-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Book Consultation</h2>
            <p className="text-slate-600 font-sans">
              Take the first step towards resilient, healthy skin. Share your details and we will connect with you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-slate-50 transition-all font-sans" placeholder="Jane Doe" disabled={status === 'submitting'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-slate-50 transition-all font-sans" placeholder="+91 00000 00000" disabled={status === 'submitting'} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-slate-50 transition-all font-sans" placeholder="jane@example.com" disabled={status === 'submitting'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Treatment of Interest</label>
                <select name="treatment" value={formData.treatment} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-slate-50 transition-all font-sans appearance-none" disabled={status === 'submitting'}>
                  <option>Hair Rejuvenation</option>
                  <option>Skin Rejuvenation</option>
                  <option>Laser Treatments</option>
                  <option>Hair Removal</option>
                  <option>Preventive Care</option>
                  <option>General Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Specific Details / Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent bg-slate-50 transition-all resize-none font-sans" placeholder="Tell us roughly what you're looking for..." disabled={status === 'submitting'}></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full md:w-auto md:min-w-[240px] mx-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-brand-600 text-white px-8 py-5 rounded-xl font-medium tracking-wide transition-all shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'submitting' ? (
                  <><Loader2 size={20} className="animate-spin" /> Processing...</>
                ) : status === 'success' ? (
                  <>Redirecting to WhatsApp...</>
                ) : (
                  <>Book Consultation <ArrowRight size={20} /></>
                )}
              </button>
            </div>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center mt-4">Something went wrong. Please call us directly or click the WhatsApp button.</p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] bg-brand-200 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>
    </section>
  );
}
