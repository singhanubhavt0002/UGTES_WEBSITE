import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_FORM_ENDPOINT } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: `New Inquiry from ${formData.name}: ${formData.subject}`,
        _replyto: formData.email,
    };

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors ? data.errors.map((err: any) => err.message).join(", ") : "Problem sending message.");
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob-accent w-[600px] h-[600px] -top-20 -right-20 opacity-30"></div>
      <div className="blob blob-primary w-[500px] h-[500px] bottom-0 -left-20 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal-section">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with our team for inquiries, quotes, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6 reveal-section" style={{ transitionDelay: '100ms' }}>
            <div className="glass-panel p-8 rounded-2xl hover-card">
              <Phone className="w-10 h-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4 text-sm">Monday - Friday, 9am - 6pm</p>
              <a href={`tel:${CONTACT_PHONE}`} className="text-primary-900 font-bold hover:text-accent-600 transition-colors">{CONTACT_PHONE}</a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover-card">
              <Mail className="w-10 h-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4 text-sm">We reply within 24 hours</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-900 font-bold hover:text-accent-600 transition-colors">{CONTACT_EMAIL}</a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover-card">
              <MapPin className="w-10 h-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Head Office</h3>
              <p className="text-gray-600">{ADDRESS}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 glass-panel rounded-3xl p-8 md:p-12 shadow-2xl reveal-section" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-primary-900 mb-8">Send us a Message</h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl text-center flex flex-col items-center animate-fade-in">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="max-w-md mx-auto mb-8 text-gray-600">Thank you for reaching out to UGTES. We will respond shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start text-sm">
                     <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                     <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all placeholder-transparent"
                      placeholder="John Doe"
                    />
                    <label htmlFor="name" className="absolute left-4 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-accent-600 peer-focus:text-xs pointer-events-none">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all placeholder-transparent"
                      placeholder="john@example.com"
                    />
                    <label htmlFor="email" className="absolute left-4 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-accent-600 peer-focus:text-xs pointer-events-none">Email Address</label>
                  </div>
                </div>

                <div className="relative group">
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all appearance-none text-gray-700"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Partnership">Partnership Proposal</option>
                    <option value="Engineering Services">Engineering Services</option>
                    <option value="Other">Other</option>
                  </select>
                   <label htmlFor="subject" className="absolute left-4 -top-2.5 bg-white px-2 text-xs font-semibold text-accent-600">Subject</label>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none placeholder-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  <label htmlFor="message" className="absolute left-4 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-accent-600 peer-focus:text-xs pointer-events-none">Message</label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary-900 text-white font-bold py-5 rounded-xl hover:bg-primary-800 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;