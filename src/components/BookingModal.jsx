import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    age: '',
    gender: 'Female',
    problem: '',
    datetime: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.datetime) {
      return alert("Please fill required fields (Name, Number, Date).");
    }
    
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "e5d44535-d42b-46e5-873a-3ee1448c73d1",
          subject: `New Appointment Request - ${formData.name}`,
          from_name: "Clinic Website Form",
          Patient_Name: formData.name,
          Phone_Number: formData.number,
          Age: formData.age,
          Gender: formData.gender,
          Preferred_Date_Time: new Date(formData.datetime).toLocaleString(),
          Medical_Problem_Reason: formData.problem
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', number: '', age: '', gender: 'Female', problem: '', datetime: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => status !== 'submitting' && onClose()}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-100 bg-brand-50">
              <div>
                <h3 className="font-serif text-2xl text-slate-800">Book Appointment</h3>
                <p className="text-sm text-slate-500 mt-1">We will contact you shortly to confirm.</p>
              </div>
              <button onClick={() => status !== 'submitting' && onClose()} className="p-2 hover:bg-white rounded-full transition-colors disabled:opacity-50">
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* Application State Blocks */}
            {status === 'success' ? (
              <div className="p-12 flex flex-col items-center justify-center text-center flex-1">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                  <CheckCircle2 size={64} className="text-green-500 mb-4 mx-auto" />
                </motion.div>
                <h4 className="text-xl font-serif text-slate-800 mb-2">Request Received!</h4>
                <p className="text-slate-500">Your details have been securely sent. We will reach out to you directly soon.</p>
              </div>
            ) : (
              <>
                <div className="p-6 overflow-y-auto custom-scrollbar flex-1 relative">
                  {status === 'error' && (
                     <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600 text-sm font-medium">
                       <AlertCircle size={16} /> Something went wrong. Please try again.
                     </div>
                  )}
                  <form id="booking-form" onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Patient Name <span className="text-red-500">*</span></label>
                      <input disabled={status === 'submitting'} required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-slate-50 text-slate-800 transition-shadow disabled:opacity-50" placeholder="Full Name" />
                    </div>

                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone <span className="text-red-500">*</span></label>
                        <input disabled={status === 'submitting'} required type="tel" name="number" value={formData.number} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-slate-50 text-slate-800 transition-shadow disabled:opacity-50" placeholder="+91 00000" />
                      </div>
                      <div className="w-1/4">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
                        <input disabled={status === 'submitting'} type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-slate-50 text-slate-800 transition-shadow disabled:opacity-50" placeholder="25" min="1" max="120" />
                      </div>
                      <div className="w-1/4">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                        <select disabled={status === 'submitting'} name="gender" value={formData.gender} onChange={handleChange} className="w-full px-2 lg:px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-slate-50 text-slate-800 transition-shadow disabled:opacity-50">
                          <option>Female</option>
                          <option>Male</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date & Time <span className="text-red-500">*</span></label>
                      <input disabled={status === 'submitting'} required type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-slate-50 text-slate-800 transition-shadow disabled:opacity-50" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Medical Concern</label>
                      <textarea disabled={status === 'submitting'} name="problem" value={formData.problem} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-slate-50 text-slate-800 transition-shadow resize-none disabled:opacity-50" placeholder="Describe your skin or hair concern..."></textarea>
                    </div>
                  </form>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-3">
                  <button 
                    type="submit" 
                    form="booking-form"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-xl transition-colors shadow-md shadow-brand-200/50 flex items-center justify-center gap-2 disabled:bg-brand-300 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting securely...</>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
