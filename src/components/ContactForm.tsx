import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[60px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 blur-[60px] rounded-full" />

      {formStatus === 'success' ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <Send className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-3xl font-black mb-4">MESSAGE SENT!</h3>
          <p className="text-gray-400">Thank you for reaching out. I'll get back to you sooner than you think.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-primary-400 ml-4">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-all focus:bg-white/10"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-accent-400 ml-4">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-500/50 transition-all focus:bg-white/10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary-400 ml-4">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 transition-all focus:bg-white/10"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-accent-400 ml-4">Your Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-500/50 transition-all focus:bg-white/10 resize-none"
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="btn-premium btn-premium-primary w-full py-5 text-sm uppercase tracking-[0.2em] font-black"
            whileTap={{ scale: 0.98 }}
          >
            {formStatus === 'submitting' ? (
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>SENDING...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Send className="w-4 h-4 translate-x-[-2px] translate-y-[-1px]" />
                <span>SEND MESSAGE</span>
              </div>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;