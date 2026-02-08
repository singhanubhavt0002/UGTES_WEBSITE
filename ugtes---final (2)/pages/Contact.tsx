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
    // Clear error state when user types
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Explicitly mapping fields for clarity and reliability
    const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: `New Inquiry from ${formData.name}: ${formData.subject}`,
        _replyto: formData.email, // Ensures the reply button works in your email client
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
        if (data && data.errors) {
            setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
            setErrorMessage("There was a problem sending your message. Please try again later.");
        }
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, or partnership opportunities. We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500 hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-primary-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Monday - Friday, 9am - 6pm</p>
              <a href={`tel:${CONTACT_PHONE}`} className="text-accent-600 font-semibold hover:text-accent-700">{CONTACT_PHONE}</a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500 hover:shadow-lg transition-shadow">
              <Mail className="w-10 h-10 text-primary-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">We reply within 24 hours</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-600 font-semibold hover:text-accent-700">{CONTACT_EMAIL}</a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-primary-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Head Office</h3>
              <p className="text-gray-600">{ADDRESS}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-lg text-center flex flex-col items-center animate-fade-in">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="max-w-md mx-auto mb-6">Thank you for reaching out to UGTES. We have received your inquiry and will respond to {CONTACT_EMAIL} shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-start text-sm">
                     <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                     <span>{errorMessage || "Unable to send message. Please verify your connection or try contacting us directly."}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Partnership">Partnership Proposal</option>
                    <option value="Engineering Services">Engineering Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary-900 text-white font-bold py-4 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
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