"use client";
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PrimaryButton from './../components/buttons/PrimaryButton';
import SecondaryButton from './../components/buttons/SecondaryButton';
import OutlineButton from './../components/buttons/OutlineButton';
import TextInput from './../components/inputs/TextInput';
import Select from './../components/inputs/Select';
import Alert from './../components/feedback/Alert';
import Badge from './../components/feedback/Badge';
import ProgressBar from './../components/feedback/ProgressBar';

export default function FeedbackPage() {
  const t = useTranslations('feedback');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const categoryOptions = [
    { value: 'bug', label: t('category.bug') },
    { value: 'feature', label: t('category.feature') },
    { value: 'improvement', label: t('category.improvement') },
    { value: 'general', label: t('category.general') }
  ];

  const ratingOptions = [
    { value: '5', label: t('rating.5') },
    { value: '4', label: t('rating.4') },
    { value: '3', label: t('rating.3') },
    { value: '2', label: t('rating.2') },
    { value: '1', label: t('rating.1') }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback || !category) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    setFeedback('');
    setRating('');
    setCategory('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('header.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('header.description')}
          </p>
        </div>

        {/* Alerts */}
        {showSuccess && (
          <div className="mb-6">
            <Alert
              type="success"
              title={t('alert.success.title')}
              message={t('alert.success.message')}
              dismissible
              onClose={() => setShowSuccess(false)}
            />
          </div>
        )}

        {showError && (
          <div className="mb-6">
            <Alert
              type="error"
              title={t('alert.error.title')}
              message={t('alert.error.message')}
              dismissible
              onClose={() => setShowError(false)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label={t('form.categoryLabel')}
                    options={categoryOptions}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                  
                  <Select
                    label={t('form.ratingLabel')}
                    options={ratingOptions}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>

                <TextInput
                  label={t('form.emailLabel')}
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={t('form.emailHelper')}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.feedbackLabel')}
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="6"
                    placeholder={t('form.feedbackPlaceholder')}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <PrimaryButton type="submit">
                    {t('form.submit')}
                  </PrimaryButton>
                  <SecondaryButton 
                    type="button" 
                    onClick={() => {
                      setFeedback('');
                      setRating('');
                      setCategory('');
                      setEmail('');
                    }}
                  >
                    {t('form.clear')}
                  </SecondaryButton>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('sidebar.stats.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('sidebar.stats.totalComponents')}</span>
                  <Badge variant="primary">25+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('sidebar.stats.githubStars')}</span>
                  <Badge variant="success">1.2k</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('sidebar.stats.contributors')}</span>
                  <Badge variant="info">45</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('sidebar.stats.issuesResolved')}</span>
                  <Badge variant="warning">89%</Badge>
                </div>
              </div>
            </div>

            {/* Development Progress */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('sidebar.progress.title')}
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t('sidebar.progress.buttons')}</span>
                    <span>100%</span>
                  </div>
                  <ProgressBar value={100} color="green" size="sm" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t('sidebar.progress.cards')}</span>
                    <span>85%</span>
                  </div>
                  <ProgressBar value={85} color="blue" size="sm" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t('sidebar.progress.forms')}</span>
                    <span>70%</span>
                  </div>
                  <ProgressBar value={70} color="yellow" size="sm" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{t('sidebar.progress.navigation')}</span>
                    <span>60%</span>
                  </div>
                  <ProgressBar value={60} color="purple" size="sm" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('sidebar.contact.title')}
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:gps.96169@gmail.com"
                  className="w-full inline-flex justify-center px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-theme-secondary hover:bg-gray-50"
                >
                  {t('sidebar.contact.email')}
                </a>

                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-theme-secondary hover:bg-gray-50"
                >
                  {t('sidebar.contact.discord')}
                </a>

                <a
                  href="https://github.com/Gyanthakur/component-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-theme-secondary hover:bg-gray-50"
                >
                  {t('sidebar.contact.github')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Feedback Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('recent.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{t('recent.items.0.name')}</p>
                  <p className="text-sm text-gray-500">{t('recent.items.0.time')}</p>
                </div>
                <Badge variant="success" size="sm" className="ml-auto">{t('recent.items.0.category')}</Badge>
              </div>
              <p className="text-gray-700 text-sm">
                {t('recent.items.0.feedback')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{t('recent.items.1.name')}</p>
                  <p className="text-sm text-gray-500">{t('recent.items.1.time')}</p>
                </div>
                <Badge variant="error" size="sm" className="ml-auto">{t('recent.items.1.category')}</Badge>
              </div>
              <p className="text-gray-700 text-sm">
                {t('recent.items.1.feedback')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{t('recent.items.2.name')}</p>
                  <p className="text-sm text-gray-500">{t('recent.items.2.time')}</p>
                </div>
                <Badge variant="primary" size="sm" className="ml-auto">{t('recent.items.2.category')}</Badge>
              </div>
              <p className="text-gray-700 text-sm">
                {t('recent.items.2.feedback')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}