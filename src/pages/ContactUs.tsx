import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send form data to backend here
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-700">
        Have a question, feedback, or need support? Fill out the form below or reach us directly.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4 flex items-center text-gray-700">
          <Phone className="h-5 w-5 mr-2 text-orange-500" />
          <span>+234 800 123 4567</span>
        </div>
        <div className="mb-4 flex items-center text-gray-700">
          <Mail className="h-5 w-5 mr-2 text-orange-500" />
          <span>info@hometech.ng</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MapPin className="h-5 w-5 mr-2 text-orange-500" />
          <span>23 Tech Avenue, Lagos, Nigeria</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {submitted ? (
          <div className="text-green-700 font-semibold text-center py-8">
            Thank you for contacting us! We’ll get back to you soon.
          </div>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 bg-blue-900 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition"
            >
              <Send className="h-5 w-5 mr-2" /> Send Message
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactPage;