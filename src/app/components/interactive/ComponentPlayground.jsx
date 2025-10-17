"use client";
import { useState, useEffect } from 'react';
import { 
  Settings, 
  Eye, 
  Code, 
  Copy, 
  RotateCcw, 
  Shuffle, 
  Sun, 
  Moon, 
  MousePointer, 
  Square, 
  Type, 
  Palette,
  Zap,
  BarChart3,
  Users,
  CreditCard,
  User,
  Database,
  CheckSquare,
  List,
  FileText,
  Info,
  Sparkles
} from 'lucide-react';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import DangerButton from '../buttons/DangerButton';
import SuccessButton from '../buttons/SuccessButton';
import GhostButton from '../buttons/GhostButton';
import OutlineButton from '../buttons/OutlineButton';
import RainbowButton from '../buttons/RainbowButton';
import SimpleCard from '../cards/SimpleCard';
import FeatureCard from '../cards/FeatureCard';
import PricingCard from '../cards/PricingCard';
import UserCard from '../cards/UserCard';
import DataCard from '../cards/DataCard';
import TextInput from '../inputs/TextInput';
import Select from '../inputs/Select';
import Checkbox from '../inputs/Checkbox';
import { useToast } from '../feedback/Toast';

export default function ComponentPlayground() {
  // Component Selection
  const {addToast, ToastContainer} = useToast();
  const [selectedComponent, setSelectedComponent] = useState('button');
  const [selectedVariant, setSelectedVariant] = useState('primary');
  
  // Button States
  const [buttonText, setButtonText] = useState('Click Me');
  const [buttonSize, setButtonSize] = useState('medium');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  
  // Card States
  const [cardTitle, setCardTitle] = useState('Sample Card');
  const [cardDescription, setCardDescription] = useState('This is a sample card description');
  const [cardImage, setCardImage] = useState('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400');
  
  // Input States
  const [inputLabel, setInputLabel] = useState('Sample Input');
  const [inputPlaceholder, setInputPlaceholder] = useState('Enter text here...');
  const [inputRequired, setInputRequired] = useState(false);
  const [inputError, setInputError] = useState('');
  
  // Pricing Card States
  const [pricingPlan, setPricingPlan] = useState('Pro');
  const [pricingPrice, setPricingPrice] = useState('$9/mo');
  const [pricingFeatures, setPricingFeatures] = useState(['10 projects', 'Priority support', 'Unlimited users']);
  
  // User Card States
  const [userName, setUserName] = useState('John Doe');
  const [userEmail, setUserEmail] = useState('john@example.com');
  const [userRole, setUserRole] = useState('Software Engineer');
  const [userAvatar, setUserAvatar] = useState('https://i.pravatar.cc/150?img=1');
  
  // Data Card States
  const [dataTitle, setDataTitle] = useState('Active Projects');
  const [dataValue, setDataValue] = useState('27');
  const [dataIcon, setDataIcon] = useState('📂');
  const [dataTrend, setDataTrend] = useState(8);
  
  // UI States
  const [copiedCode, setCopiedCode] = useState('');
  const [previewMode, setPreviewMode] = useState('light');
  const [showCode, setShowCode] = useState(true);

  // Component variants mapping
  const componentVariants = {
    button: {
      primary: { component: PrimaryButton, name: 'Primary Button' },
      secondary: { component: SecondaryButton, name: 'Secondary Button' },
      danger: { component: DangerButton, name: 'Danger Button' },
      success: { component: SuccessButton, name: 'Success Button' },
      ghost: { component: GhostButton, name: 'Ghost Button' },
      outline: { component: OutlineButton, name: 'Outline Button' },
      rainbow: { component: RainbowButton, name: 'Rainbow Button' }
    },
    card: {
      simple: { component: SimpleCard, name: 'Simple Card' },
      feature: { component: FeatureCard, name: 'Feature Card' },
      pricing: { component: PricingCard, name: 'Pricing Card' },
      user: { component: UserCard, name: 'User Card' },
      data: { component: DataCard, name: 'Data Card' }
    },
    input: {
      text: { component: TextInput, name: 'Text Input' },
      select: { component: Select, name: 'Select Dropdown' },
      checkbox: { component: Checkbox, name: 'Checkbox' }
    }
  };

  // Generate code based on current settings
  const generateCode = () => {
    const variant = componentVariants[selectedComponent]?.[selectedVariant];
    if (!variant) return '';

    if (selectedComponent === 'button') {
      const sizeClass = buttonSize === 'small' ? 'px-3 py-1 text-sm' : 
                       buttonSize === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2';
      return `<${variant.component.name} 
  onClick={() => alert('Button clicked!')}
  ${buttonDisabled ? 'disabled' : ''}
  ${buttonLoading ? 'loading' : ''}
  className="${sizeClass}"
>
  ${buttonText}
</${variant.component.name}>`;
    } 
    
    else if (selectedComponent === 'card') {
      if (selectedVariant === 'simple') {
        return `<SimpleCard 
  title="${cardTitle}"
  description="${cardDescription}"
/>`;
      } else if (selectedVariant === 'feature') {
        return `<FeatureCard 
  title="${cardTitle}"
  description="${cardDescription}"
/>`;
      } else if (selectedVariant === 'pricing') {
        return `<PricingCard 
  plan="${pricingPlan}"
  price="${pricingPrice}"
  features={${JSON.stringify(pricingFeatures)}}
/>`;
      } else if (selectedVariant === 'user') {
        return `<UserCard 
  name="${userName}"
  email="${userEmail}"
  role="${userRole}"
  avatar="${userAvatar}"
  onClick={() => alert('User card clicked!')}
/>`;
      } else if (selectedVariant === 'data') {
        return `<DataCard 
  title="${dataTitle}"
  value="${dataValue}"
  icon="${dataIcon}"
  trend={${dataTrend}}
/>`;
      }
    }
    
    else if (selectedComponent === 'input') {
      if (selectedVariant === 'text') {
        return `<TextInput 
  label="${inputLabel}"
  placeholder="${inputPlaceholder}"
  ${inputRequired ? 'required' : ''}
  ${inputError ? `error="${inputError}"` : ''}
/>`;
      } else if (selectedVariant === 'select') {
        return `<Select 
  label="${inputLabel}"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
  ${inputRequired ? 'required' : ''}
/>`;
      } else if (selectedVariant === 'checkbox') {
        return `<Checkbox 
  label="${inputLabel}"
  description="Check this option"
  checked={false}
  onChange={() => {}}
/>`;
      }
    }
    
    return '';
  };

  // Copy code to clipboard
  const copyCode = async () => {
    const code = generateCode();
    try {
      await navigator.clipboard.writeText(code);
      addToast('Code copied to clipboard!', 'success', 2000);
      setCopiedCode('✅ Copied!');
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      addToast('Failed to copy code.', 'error', 4000);
      setCopiedCode('❌ Failed to copy');
      setTimeout(() => setCopiedCode(''), 2000);
    }
  };

  // Reset to defaults
  const resetToDefaults = () => {
    if (selectedComponent === 'button') {
      setButtonText('Click Me');
      setButtonSize('medium');
      setButtonDisabled(false);
      setButtonLoading(false);
    } else if (selectedComponent === 'card') {
      setCardTitle('Sample Card');
      setCardDescription('This is a sample card description');
      setCardImage('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400');
      setPricingPlan('Pro');
      setPricingPrice('$9/mo');
      setPricingFeatures(['10 projects', 'Priority support', 'Unlimited users']);
      setUserName('John Doe');
      setUserEmail('john@example.com');
      setUserRole('Software Engineer');
      setUserAvatar('https://i.pravatar.cc/150?img=1');
      setDataTitle('Active Projects');
      setDataValue('27');
      setDataIcon('📂');
      setDataTrend(8);
    } else if (selectedComponent === 'input') {
      setInputLabel('Sample Input');
      setInputPlaceholder('Enter text here...');
      setInputRequired(false);
      setInputError('');
    }
  };

  // Randomize values
  const randomizeValues = () => {
    if (selectedComponent === 'button') {
      const texts = ['Get Started', 'Learn More', 'Sign Up Now', 'Download', 'Subscribe', 'Join Us', 'Try Free', 'Contact Us'];
      const sizes = ['small', 'medium', 'large'];
      setButtonText(texts[Math.floor(Math.random() * texts.length)]);
      setButtonSize(sizes[Math.floor(Math.random() * sizes.length)]);
      setButtonDisabled(Math.random() > 0.7);
      setButtonLoading(Math.random() > 0.8);
    } else if (selectedComponent === 'card') {
      const titles = ['Amazing Feature', 'Premium Service', 'New Product', 'Special Offer', 'Latest Update'];
      const descriptions = [
        'Discover incredible features that will transform your workflow',
        'Experience premium quality with our professional services',
        'Introducing our latest product with cutting-edge technology',
        'Limited time offer with exclusive benefits for you',
        'Stay updated with the latest improvements and features'
      ];
      setCardTitle(titles[Math.floor(Math.random() * titles.length)]);
      setCardDescription(descriptions[Math.floor(Math.random() * descriptions.length)]);
      
      if (selectedVariant === 'user') {
        const names = ['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Emma Brown'];
        const roles = ['Frontend Developer', 'Backend Engineer', 'UI/UX Designer', 'Product Manager', 'DevOps Engineer'];
        setUserName(names[Math.floor(Math.random() * names.length)]);
        setUserRole(roles[Math.floor(Math.random() * roles.length)]);
        setUserAvatar(`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`);
      }
      
      if (selectedVariant === 'data') {
        const dataTitles = ['Total Users', 'Revenue', 'Active Sessions', 'Conversion Rate', 'Growth Rate'];
        const dataValues = ['1,234', '$45.6K', '89%', '12.5%', '+23%'];
        const dataIcons = ['👥', '💰', '📊', '📈', '🚀'];
        const randomIndex = Math.floor(Math.random() * dataTitles.length);
        setDataTitle(dataTitles[randomIndex]);
        setDataValue(dataValues[randomIndex]);
        setDataIcon(dataIcons[randomIndex]);
        setDataTrend(Math.floor(Math.random() * 50) - 10);
      }
    }
  };

  // Auto-update variant when component changes
  useEffect(() => {
    const variants = Object.keys(componentVariants[selectedComponent] || {});
    if (variants.length > 0 && !variants.includes(selectedVariant)) {
      setSelectedVariant(variants[0]);
    }
  }, [selectedComponent]);

  // Render current component
  const renderComponent = () => {
    const variant = componentVariants[selectedComponent]?.[selectedVariant];
    if (!variant) return null;

    const Component = variant.component;
    const commonProps = {
      onClick: () => alert(`${variant.name} clicked!`)
    };

    if (selectedComponent === 'button') {
      const sizeClass = buttonSize === 'small' ? 'px-3 py-1 text-sm' : 
                       buttonSize === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2';
      return (
        <Component
          {...commonProps}
          disabled={buttonDisabled}
          className={`${sizeClass} ${buttonLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {buttonLoading ? '⏳ Loading...' : buttonText}
        </Component>
      );
    } 
    
    else if (selectedComponent === 'card') {
      if (selectedVariant === 'simple') {
        return <Component title={cardTitle} description={cardDescription} />;
      } else if (selectedVariant === 'feature') {
        return <Component title={cardTitle} description={cardDescription} />;
      } else if (selectedVariant === 'pricing') {
        return <Component plan={pricingPlan} price={pricingPrice} features={pricingFeatures} />;
      } else if (selectedVariant === 'user') {
        return <Component name={userName} email={userEmail} role={userRole} avatar={userAvatar} onClick={commonProps.onClick} />;
      } else if (selectedVariant === 'data') {
        return <Component title={dataTitle} value={dataValue} icon={dataIcon} trend={dataTrend} />;
      }
    }
    
    else if (selectedComponent === 'input') {
      if (selectedVariant === 'text') {
        return <Component label={inputLabel} placeholder={inputPlaceholder} required={inputRequired} error={inputError || undefined} />;
      } else if (selectedVariant === 'select') {
        return <Component 
          label={inputLabel} 
          required={inputRequired}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
          ]} 
        />;
      } else if (selectedVariant === 'checkbox') {
        return <Component label={inputLabel} description="Check this option" checked={false} onChange={() => {}} />;
      }
    }

    return null;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Advanced Component Playground
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Customize components in real-time and export production-ready code!
        </p>
      </div>

      {/* Top Controls */}
      <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Component Type */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Component Type
            </label>
            <div className="relative">
              <MousePointer className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="button">Buttons</option>
                <option value="card">Cards</option>
                <option value="input">Inputs</option>
              </select>
            </div>
          </div>

          {/* Component Variant */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Variant
            </label>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {Object.entries(componentVariants[selectedComponent] || {}).map(([key, variant]) => (
                <option key={key} value={key}>{variant.name}</option>
              ))}
            </select>
          </div>

          {/* Preview Mode */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Preview Mode
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setPreviewMode('light')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  previewMode === 'light' ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Sun className="w-4 h-4" />
                Light
              </button>
              <button
                onClick={() => setPreviewMode('dark')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  previewMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Moon className="w-4 h-4" />
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Customization Controls
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetToDefaults}
                className="px-3 py-1 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
              <button
                onClick={randomizeValues}
                className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors flex items-center gap-1"
              >
                <Shuffle className="w-3 h-3" />
                Random
              </button>
            </div>
          </div>

          {/* Dynamic Controls Based on Component */}
          <div className="space-y-6">
            {/* Button Controls */}
            {selectedComponent === 'button' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Button Text
                  </label>
                  <TextInput
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    placeholder="Enter button text"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Button Size
                  </label>
                  <div className="flex gap-2">
                    {['small', 'medium', 'large'].map(size => (
                      <button
                        key={size}
                        onClick={() => setButtonSize(size)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          buttonSize === size
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                        }`}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={buttonDisabled}
                      onChange={(e) => setButtonDisabled(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Disabled</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={buttonLoading}
                      onChange={(e) => setButtonLoading(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Loading</span>
                  </label>
                </div>
              </>
            )}

            {/* Card Controls */}
            {selectedComponent === 'card' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Card Title
                  </label>
                  <TextInput
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    placeholder="Enter card title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Card Description
                  </label>
                  <textarea
                    value={cardDescription}
                    onChange={(e) => setCardDescription(e.target.value)}
                    placeholder="Enter card description"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Pricing Card Specific Controls */}
                {selectedVariant === 'pricing' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Plan Name
                        </label>
                        <TextInput
                          value={pricingPlan}
                          onChange={(e) => setPricingPlan(e.target.value)}
                          placeholder="e.g., Pro"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Price
                        </label>
                        <TextInput
                          value={pricingPrice}
                          onChange={(e) => setPricingPrice(e.target.value)}
                          placeholder="e.g., $9/mo"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Features (comma separated)
                      </label>
                      <TextInput
                        value={pricingFeatures.join(', ')}
                        onChange={(e) => setPricingFeatures(e.target.value.split(', ').filter(f => f.trim()))}
                        placeholder="Feature 1, Feature 2, Feature 3"
                      />
                    </div>
                  </>
                )}

                {/* User Card Specific Controls */}
                {selectedVariant === 'user' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          User Name
                        </label>
                        <TextInput
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Email
                        </label>
                        <TextInput
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Role
                      </label>
                      <TextInput
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Avatar URL
                      </label>
                      <TextInput
                        value={userAvatar}
                        onChange={(e) => setUserAvatar(e.target.value)}
                        placeholder="https://i.pravatar.cc/150?img=1"
                      />
                    </div>
                  </>
                )}

                {/* Data Card Specific Controls */}
                {selectedVariant === 'data' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Data Title
                        </label>
                        <TextInput
                          value={dataTitle}
                          onChange={(e) => setDataTitle(e.target.value)}
                          placeholder="Active Projects"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Value
                        </label>
                        <TextInput
                          value={dataValue}
                          onChange={(e) => setDataValue(e.target.value)}
                          placeholder="27"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Icon (Emoji)
                        </label>
                        <TextInput
                          value={dataIcon}
                          onChange={(e) => setDataIcon(e.target.value)}
                          placeholder="📂"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Trend (%)
                        </label>
                        <input
                          type="number"
                          value={dataTrend}
                          onChange={(e) => setDataTrend(parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                          placeholder="8"
                        />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {/* Input Controls */}
            {selectedComponent === 'input' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Label
                  </label>
                  <TextInput
                    value={inputLabel}
                    onChange={(e) => setInputLabel(e.target.value)}
                    placeholder="Enter input label"
                  />
                </div>
                
                {selectedVariant === 'text' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Placeholder
                      </label>
                      <TextInput
                        value={inputPlaceholder}
                        onChange={(e) => setInputPlaceholder(e.target.value)}
                        placeholder="Enter placeholder text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Error Message (optional)
                      </label>
                      <TextInput
                        value={inputError}
                        onChange={(e) => setInputError(e.target.value)}
                        placeholder="Enter error message"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={inputRequired}
                      onChange={(e) => setInputRequired(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Required</span>
                  </label>
                </div>
              </>
            )}
          </div>

          {/* Code Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-500" />
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Generated Code
                </label>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition-colors flex items-center gap-1"
                >
                  <Eye className="w-3 h-3" />
                  {showCode ? 'Hide' : 'Show'}
                </button>
              </div>
              <button
                onClick={copyCode}
                className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copiedCode || 'Copy Code'}
              </button>
            </div>
            
            {showCode && (
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-800 dark:text-gray-200 font-mono">
                    {generateCode()}
                  </code>
                </pre>
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    React JSX
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Live Preview
              </h2>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {componentVariants[selectedComponent]?.[selectedVariant]?.name}
            </div>
          </div>

          {/* Preview Container */}
          <div 
            className={`min-h-[400px] rounded-lg p-8 flex items-center justify-center transition-all duration-300 ${
              previewMode === 'dark' 
                ? 'bg-gray-900 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className={previewMode === 'dark' ? 'dark' : ''}>
              <div className="w-full max-w-sm">
                {renderComponent()}
              </div>
            </div>
          </div>

          {/* Component Info */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Component Info</span>
            </div>
            <div className="text-sm text-blue-800 dark:text-blue-300">
              <p><strong>Type:</strong> {selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)}</p>
              <p><strong>Variant:</strong> {componentVariants[selectedComponent]?.[selectedVariant]?.name}</p>
              <p><strong>Interactive:</strong> {selectedComponent === 'button' ? 'Yes (Click to test)' : selectedComponent === 'card' && selectedVariant === 'user' ? 'Yes (Click to test)' : 'Display only'}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <SecondaryButton onClick={resetToDefaults}>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset
              </div>
            </SecondaryButton>
            
            <SuccessButton onClick={randomizeValues}>
              <div className="flex items-center gap-2">
                <Shuffle className="w-4 h-4" />
                Randomize
              </div>
            </SuccessButton>

            <button
              onClick={copyCode}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Code
            </button>
          </div>
        </div>
      </div>

      {/* All Variants Showcase */}
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          {selectedComponent === 'button' && <Square className="w-5 h-5 text-purple-500" />}
          {selectedComponent === 'card' && <FileText className="w-5 h-5 text-purple-500" />}
          {selectedComponent === 'input' && <Type className="w-5 h-5 text-purple-500" />}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            All {selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)} Variants
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(componentVariants[selectedComponent] || {}).map(([key, variant]) => (
            <div key={key} className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <div className="mb-3 flex justify-center">
                <div
                  onClick={() => setSelectedVariant(key)}
                  className={`cursor-pointer transition-all ${selectedVariant === key ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 rounded-lg' : ''}`}
                >
                  {/* Render mini version of each variant */}
                  {selectedComponent === 'button' && (
                    <variant.component onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVariant(key);
                    }}>
                      {variant.name.split(' ')[0]}
                    </variant.component>
                  )}
                  {selectedComponent === 'card' && key === 'simple' && (
                    <div className="scale-75 origin-center">
                      <variant.component title="Sample" description="Preview" />
                    </div>
                  )}
                  {selectedComponent === 'card' && key === 'feature' && (
                    <div className="scale-75 origin-center">
                      <variant.component title="Feature" description="Preview" />
                    </div>
                  )}
                  {selectedComponent === 'card' && key === 'pricing' && (
                    <div className="scale-75 origin-center">
                      <variant.component plan="Pro" price="$9" features={['Feature 1']} />
                    </div>
                  )}
                  {selectedComponent === 'card' && key === 'user' && (
                    <div className="scale-75 origin-center">
                      <variant.component name="John" email="john@example.com" role="Developer" avatar="https://i.pravatar.cc/150?img=1" />
                    </div>
                  )}
                  {selectedComponent === 'card' && key === 'data' && (
                    <div className="scale-75 origin-center">
                      <variant.component title="Users" value="123" icon="👥" trend={5} />
                    </div>
                  )}
                  {selectedComponent === 'input' && (
                    <div className="scale-90 origin-center">
                      <variant.component 
                        label={variant.name} 
                        placeholder="Preview"
                        {...(key === 'select' ? { options: [{ value: 'opt1', label: 'Option 1' }] } : {})}
                        {...(key === 'checkbox' ? { checked: false, onChange: () => {} } : {})}
                      />
                    </div>
                  )}
                </div>
              </div>
              <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                {variant.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Click to customize
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5" />
          <h2 className="text-xl font-semibold">
            Playground Stats
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MousePointer className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">{Object.keys(componentVariants.button).length}</div>
            <div className="text-sm opacity-80">Button Types</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <CreditCard className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">{Object.keys(componentVariants.card).length}</div>
            <div className="text-sm opacity-80">Card Types</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Type className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">{Object.keys(componentVariants.input).length}</div>
            <div className="text-sm opacity-80">Input Types</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">∞</div>
            <div className="text-sm opacity-80">Customizations</div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}