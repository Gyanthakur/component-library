"use client"
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';


export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('errors.subjectRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('errors.messageLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('header.title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('header.description')}
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('form.title')}</h2>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">{t('form.success')}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">{t('form.error')}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.fields.name.label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                placeholder={t('form.fields.name.placeholder')}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.fields.email.label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                placeholder={t('form.fields.email.placeholder')}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.fields.subject.label')}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
              >
                <option value="">{t('form.fields.subject.placeholder')}</option>
                <option value="bug-report">{t('form.fields.subject.options.bugReport')}</option>
                <option value="feature-request">{t('form.fields.subject.options.featureRequest')}</option>
                <option value="documentation">{t('form.fields.subject.options.documentation')}</option>
                <option value="contribution">{t('form.fields.subject.options.contribution')}</option>
                <option value="support">{t('form.fields.subject.options.support')}</option>
                <option value="other">{t('form.fields.subject.options.other')}</option>
              </select>
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.fields.message.label')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                placeholder={t('form.fields.message.placeholder')}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  {t('form.sending')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('form.send')}
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-blue-50 dark:bg-blue-900/50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('info.title')}</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <a
                  href="mailto:gps.96169@gmail.com"
                  className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{t('info.email.title')}</h3>
                  <a
                    href="mailto:gps.96169@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all max-w-full"
                  >
                    gps.96169@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <a
                  href="https://github.com/Gyanthakur/component-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{t('info.github.title')}</h3>
                  <a
                    href="https://github.com/Gyanthakur/component-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all max-w-full"
                  >
                    github.com/Gyanthakur/component-library
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <a
                  href="https://linktr.ee/gp_singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <MapPin className="w-5 h-5 text-white" />
                </a>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{t('info.linktree.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t('info.linktree.description')}</p>
                  <a
                    href="https://linktr.ee/gp_singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    linktr.ee/gp_singh
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('social.title')}</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/Gyanthakur"
                className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/gps_96169"
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
                className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('faq.title')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">{t('faq.q1.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('faq.q1.description')}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">{t('faq.q2.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('faq.q2.description')}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">{t('faq.q3.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('faq.q3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}