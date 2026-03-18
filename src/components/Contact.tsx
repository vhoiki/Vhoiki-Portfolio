import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-dark-base relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/contact-bg.jpg" 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-base/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">Let's Connect</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest text-white/90">Contact Info</h3>
              <div className="space-y-4 text-white/70 font-light">
                <p className="flex items-center gap-3 hover:text-neon-violet transition-colors duration-300 cursor-pointer">
                  <Mail size={18} />
                  vhoiki@gmail.com
                </p>
              </div>
            </div>


          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-neon-violet transition-colors peer"
                placeholder="Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 -top-3.5 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-neon-violet uppercase tracking-widest"
              >
                Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-neon-violet transition-colors peer"
                placeholder="Email"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-3.5 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-neon-violet uppercase tracking-widest"
              >
                Email
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message" 
                rows={4}
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-neon-violet transition-colors peer resize-none"
                placeholder="Message"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-3.5 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-neon-violet uppercase tracking-widest"
              >
                Message
              </label>
            </div>

            <button 
              type="submit"
              className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase py-4 px-8 border border-white/20 hover:border-neon-violet hover:bg-neon-violet/10 rounded-full transition-all duration-300 w-fit"
            >
              Send Message
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
