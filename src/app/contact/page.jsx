import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about MyLibrary? Want to contribute or report a bug? 
          We'd love to hear from you! Reach out through any of the channels below.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <div className="flex items-center mb-8">
          <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-semibold text-gray-900">Get in Touch</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 mb-2">Send us an email for general inquiries</p>
            <a href="mailto:hello@mylibrary.dev" className="text-blue-600 hover:text-blue-800 font-medium">
              hello@mylibrary.dev
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">Phone</h3>
            </div>
            <p className="text-gray-600 mb-2">Call us during business hours</p>
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 font-medium">
              +1 (234) 567-8900
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-medium text-gray-900">Office</h3>
            </div>
            <p className="text-gray-600">
              123 Developer Street<br />
              Tech Valley, CA 94000<br />
              United States
            </p>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section>
        <div className="flex items-center mb-8">
          <Clock className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-semibold text-gray-900">Business Hours</h2>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Support Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM PST</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Support</h3>
              <p className="text-gray-600">
                For critical issues affecting production environments, 
                we offer 24/7 emergency support for enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="flex items-center mb-8">
          <Send className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-semibold text-gray-900">Send us a Message</h2>
        </div>
        
        <form className="bg-white p-8 rounded-lg shadow-sm border space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            >
              <option value="">Select a category</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
              I'd like to receive updates about MyLibrary and new component releases
            </label>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Additional Resources */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Find comprehensive guides and API references in our GitHub repository.
            </p>
            <a href="https://github.com/Gyanthakur/component-library" className="text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">
              View Documentation →
            </a>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 mb-4">
              Report issues, contribute code, or browse our open-source repository.
            </p>
            <a href="https://github.com/Gyanthakur/component-library" className="text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">
              Visit GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}