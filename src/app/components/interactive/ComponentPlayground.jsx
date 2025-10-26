"use client";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
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
  CreditCard,
  FileText,
  Info,
  Heart
} from "lucide-react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import DangerButton from "../buttons/DangerButton";
import SuccessButton from "../buttons/SuccessButton";
import GhostButton from "../buttons/GhostButton";
import OutlineButton from "../buttons/OutlineButton";
import RainbowButton from "../buttons/RainbowButton";
import SimpleCard from "../cards/SimpleCard";
import FeatureCard from "../cards/FeatureCard";
import PricingCard from "../cards/PricingCard";
import UserCard from "../cards/UserCard";
import DataCard from "../cards/DataCard";
import TextInput from "../inputs/TextInput";
import Select from "../inputs/Select";
import Checkbox from "../inputs/Checkbox";
import { useToast } from "../feedback/Toast";

export default function ComponentPlayground() {
  // Translations
  const t = useTranslations('playground');
  
  // Component Selection
  const { addToast, ToastContainer } = useToast();
  const [selectedComponent, setSelectedComponent] = useState("button");
  const [selectedVariant, setSelectedVariant] = useState("primary");

  // Button States
  const [buttonText, setButtonText] = useState(t('defaultValues.buttonText'));
  const [buttonSize, setButtonSize] = useState("medium");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Card States
  const [cardTitle, setCardTitle] = useState(t('defaultValues.cardTitle'));
  const [cardDescription, setCardDescription] = useState(t('defaultValues.cardDescription'));
  const [cardImage, setCardImage] = useState(
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"
  );

  // Input States
  const [inputLabel, setInputLabel] = useState(t('defaultValues.inputLabel'));
  const [inputPlaceholder, setInputPlaceholder] = useState(t('defaultValues.inputPlaceholder'));
  const [inputRequired, setInputRequired] = useState(false);
  const [inputError, setInputError] = useState("");

  // Pricing Card States
  const [pricingPlan, setPricingPlan] = useState(t('pricing.defaultPlan'));
  const [pricingPrice, setPricingPrice] = useState(t('pricing.defaultPrice'));
  const [pricingFeatures, setPricingFeatures] = useState([
    t('pricing.defaultFeatures.0'),
    t('pricing.defaultFeatures.1'),
    t('pricing.defaultFeatures.2'),
  ]);

  // User Card States
  const [userName, setUserName] = useState(t('userData.defaultName'));
  const [userEmail, setUserEmail] = useState(t('userData.defaultEmail'));
  const [userRole, setUserRole] = useState(t('userData.defaultRole'));
  const [userAvatar, setUserAvatar] = useState(
    "https://i.pravatar.cc/150?img=1"
  );

  // Data Card States
  const [dataTitle, setDataTitle] = useState(t('dataCard.defaultTitle'));
  const [dataValue, setDataValue] = useState(t('dataCard.defaultValue'));
  const [dataIcon, setDataIcon] = useState(t('dataCard.defaultIcon'));
  const [dataTrend, setDataTrend] = useState(8);

  // UI States
  const [copiedCode, setCopiedCode] = useState("");
  const [previewMode, setPreviewMode] = useState("light");
  const [showCode, setShowCode] = useState(true);

  // Favorites System
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Component variants mapping with translations
  const componentVariants = {
    button: {
      primary: { component: PrimaryButton, name: t('buttonVariants.primary') },
      secondary: { component: SecondaryButton, name: t('buttonVariants.secondary') },
      danger: { component: DangerButton, name: t('buttonVariants.danger') },
      success: { component: SuccessButton, name: t('buttonVariants.success') },
      ghost: { component: GhostButton, name: t('buttonVariants.ghost') },
      outline: { component: OutlineButton, name: t('buttonVariants.outline') },
      rainbow: { component: RainbowButton, name: t('buttonVariants.rainbow') },
    },
    card: {
      simple: { component: SimpleCard, name: t('cardVariants.simple') },
      feature: { component: FeatureCard, name: t('cardVariants.feature') },
      pricing: { component: PricingCard, name: t('cardVariants.pricing') },
      user: { component: UserCard, name: t('cardVariants.user') },
      data: { component: DataCard, name: t('cardVariants.data') },
    },
    input: {
      text: { component: TextInput, name: t('inputVariants.text') },
      select: { component: Select, name: t('inputVariants.select') },
      checkbox: { component: Checkbox, name: t('inputVariants.checkbox') },
    },
  };

  // Generate code based on current settings
  const generateCode = () => {
    const variant = componentVariants[selectedComponent]?.[selectedVariant];
    if (!variant) return "";

    if (selectedComponent === "button") {
      const sizeClass =
        buttonSize === "small"
          ? "px-3 py-1 text-sm"
          : buttonSize === "large"
          ? "px-6 py-3 text-lg"
          : "px-4 py-2";
      return `<${variant.component.name} 
  onClick={() => alert('Button clicked!')}
  ${buttonDisabled ? "disabled" : ""}
  ${buttonLoading ? "loading" : ""}
  className="${sizeClass}"
>
  ${buttonText}
</${variant.component.name}>`;
    } else if (selectedComponent === "card") {
      if (selectedVariant === "simple") {
        return `<SimpleCard 
  title="${cardTitle}"
  description="${cardDescription}"
/>`;
      } else if (selectedVariant === "feature") {
        return `<FeatureCard 
  title="${cardTitle}"
  description="${cardDescription}"
/>`;
      } else if (selectedVariant === "pricing") {
        return `<PricingCard 
  plan="${pricingPlan}"
  price="${pricingPrice}"
  features={${JSON.stringify(pricingFeatures)}}
/>`;
      } else if (selectedVariant === "user") {
        return `<UserCard 
  name="${userName}"
  email="${userEmail}"
  role="${userRole}"
  avatar="${userAvatar}"
  onClick={() => alert('User card clicked!')}
/>`;
      } else if (selectedVariant === "data") {
        return `<DataCard 
  title="${dataTitle}"
  value="${dataValue}"
  icon="${dataIcon}"
  trend={${dataTrend}}
/>`;
      }
    } else if (selectedComponent === "input") {
      if (selectedVariant === "text") {
        return `<TextInput 
  label="${inputLabel}"
  placeholder="${inputPlaceholder}"
  ${inputRequired ? "required" : ""}
  ${inputError ? `error="${inputError}"` : ""}
/>`;
      } else if (selectedVariant === "select") {
        return `<Select 
  label="${inputLabel}"
  options={[
    { value: 'option1', label: '${t('defaultValues.selectOptions.option1')}' },
    { value: 'option2', label: '${t('defaultValues.selectOptions.option2')}' },
    { value: 'option3', label: '${t('defaultValues.selectOptions.option3')}' }
  ]}
  ${inputRequired ? "required" : ""}
/>`;
      } else if (selectedVariant === "checkbox") {
        return `<Checkbox 
  label="${inputLabel}"
  description="${t('defaultValues.checkboxDescription')}"
  checked={false}
  onChange={() => {}}
/>`;
      }
    }

    return "";
  };

  // Copy code to clipboard
  const copyCode = async () => {
    const code = generateCode();
    try {
      await navigator.clipboard.writeText(code);
      addToast(t('messages.codeCopied'), "success", 2000);
      setCopiedCode(t('codeSection.copied'));
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      addToast(t('messages.copyFailed'), "error", 4000);
      setCopiedCode(t('codeSection.failedToCopy'));
      setTimeout(() => setCopiedCode(""), 2000);
    }
  };

  // Reset to defaults
  const resetToDefaults = () => {
    if (selectedComponent === "button") {
      setButtonText(t('defaultValues.buttonText'));
      setButtonSize("medium");
      setButtonDisabled(false);
      setButtonLoading(false);
    } else if (selectedComponent === "card") {
      setCardTitle(t('defaultValues.cardTitle'));
      setCardDescription(t('defaultValues.cardDescription'));
      setCardImage(
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"
      );
      setPricingPlan(t('pricing.defaultPlan'));
      setPricingPrice(t('pricing.defaultPrice'));
      setPricingFeatures([
        t('pricing.defaultFeatures.0'),
        t('pricing.defaultFeatures.1'),
        t('pricing.defaultFeatures.2'),
      ]);
      setUserName(t('userData.defaultName'));
      setUserEmail(t('userData.defaultEmail'));
      setUserRole(t('userData.defaultRole'));
      setUserAvatar("https://i.pravatar.cc/150?img=1");
      setDataTitle(t('dataCard.defaultTitle'));
      setDataValue(t('dataCard.defaultValue'));
      setDataIcon(t('dataCard.defaultIcon'));
      setDataTrend(parseInt(t('dataCard.defaultTrend')));
    } else if (selectedComponent === "input") {
      setInputLabel(t('defaultValues.inputLabel'));
      setInputPlaceholder(t('defaultValues.inputPlaceholder'));
      setInputRequired(false);
      setInputError("");
    }
  };

  // Randomize values
  const randomizeValues = () => {
    if (selectedComponent === "button") {
      const texts = [
        t('randomValues.buttonTexts.0'),
        t('randomValues.buttonTexts.1'),
        t('randomValues.buttonTexts.2'),
        t('randomValues.buttonTexts.3'),
        t('randomValues.buttonTexts.4'),
        t('randomValues.buttonTexts.5'),
        t('randomValues.buttonTexts.6'),
        t('randomValues.buttonTexts.7'),
      ];
      const sizes = ["small", "medium", "large"];
      setButtonText(texts[Math.floor(Math.random() * texts.length)]);
      setButtonSize(sizes[Math.floor(Math.random() * sizes.length)]);
      setButtonDisabled(Math.random() > 0.7);
      setButtonLoading(Math.random() > 0.8);
    } else if (selectedComponent === "card") {
      const titles = [
        t('randomValues.cardTitles.0'),
        t('randomValues.cardTitles.1'),
        t('randomValues.cardTitles.2'),
        t('randomValues.cardTitles.3'),
        t('randomValues.cardTitles.4'),
      ];
      const descriptions = [
        t('randomValues.cardDescriptions.0'),
        t('randomValues.cardDescriptions.1'),
        t('randomValues.cardDescriptions.2'),
        t('randomValues.cardDescriptions.3'),
        t('randomValues.cardDescriptions.4'),
      ];
      setCardTitle(titles[Math.floor(Math.random() * titles.length)]);
      setCardDescription(
        descriptions[Math.floor(Math.random() * descriptions.length)]
      );

      if (selectedVariant === "user") {
        const names = [
          t('randomValues.userNames.0'),
          t('randomValues.userNames.1'),
          t('randomValues.userNames.2'),
          t('randomValues.userNames.3'),
          t('randomValues.userNames.4'),
        ];
        const roles = [
          t('randomValues.userRoles.0'),
          t('randomValues.userRoles.1'),
          t('randomValues.userRoles.2'),
          t('randomValues.userRoles.3'),
          t('randomValues.userRoles.4'),
        ];
        setUserName(names[Math.floor(Math.random() * names.length)]);
        setUserRole(roles[Math.floor(Math.random() * roles.length)]);
        setUserAvatar(
          `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`
        );
      }

      if (selectedVariant === "data") {
        const dataTitles = [
          t('randomValues.dataTitles.0'),
          t('randomValues.dataTitles.1'),
          t('randomValues.dataTitles.2'),
          t('randomValues.dataTitles.3'),
          t('randomValues.dataTitles.4'),
        ];
        const dataValues = [
          t('randomValues.dataValues.0'),
          t('randomValues.dataValues.1'),
          t('randomValues.dataValues.2'),
          t('randomValues.dataValues.3'),
          t('randomValues.dataValues.4'),
        ];
        const dataIcons = [
          t('randomValues.dataIcons.0'),
          t('randomValues.dataIcons.1'),
          t('randomValues.dataIcons.2'),
          t('randomValues.dataIcons.3'),
          t('randomValues.dataIcons.4'),
        ];
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

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem("componentFavorites");
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem("componentFavorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  // Favorites functionality
  const toggleFavorite = (componentType, variantKey) => {
    const favoriteId = `${componentType}-${variantKey}`;
    const variant = componentVariants[componentType]?.[variantKey];

    if (!variant) return;

    setFavorites((prev) => {
      const existingIndex = prev.findIndex((fav) => fav.id === favoriteId);

      if (existingIndex >= 0) {
        // Remove from favorites
        return prev.filter((fav) => fav.id !== favoriteId);
      } else {
        // Add to favorites
        return [
          ...prev,
          {
            id: favoriteId,
            componentType,
            variantKey,
            name: variant.name,
            addedAt: new Date().toISOString(),
          },
        ];
      }
    });
  };

  const isFavorite = (componentType, variantKey) => {
    const favoriteId = `${componentType}-${variantKey}`;
    return favorites.some((fav) => fav.id === favoriteId);
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  // Render current component
  const renderComponent = () => {
    const variant = componentVariants[selectedComponent]?.[selectedVariant];
    if (!variant) return null;

    const Component = variant.component;
    const commonProps = {
      onClick: () => alert(t('messages.clickAlert', { component: variant.name })),
    };

    if (selectedComponent === "button") {
      const sizeClass =
        buttonSize === "small"
          ? "px-3 py-1 text-sm"
          : buttonSize === "large"
          ? "px-6 py-3 text-lg"
          : "px-4 py-2";
      return (
        <Component
          {...commonProps}
          disabled={buttonDisabled}
          className={`${sizeClass} ${
            buttonLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {buttonLoading ? t('buttonControls.loadingText') : buttonText}
        </Component>
      );
    } else if (selectedComponent === "card") {
      if (selectedVariant === "simple") {
        return <Component title={cardTitle} description={cardDescription} />;
      } else if (selectedVariant === "feature") {
        return <Component title={cardTitle} description={cardDescription} />;
      } else if (selectedVariant === "pricing") {
        return (
          <Component
            plan={pricingPlan}
            price={pricingPrice}
            features={pricingFeatures}
          />
        );
      } else if (selectedVariant === "user") {
        return (
          <Component
            name={userName}
            email={userEmail}
            role={userRole}
            avatar={userAvatar}
            onClick={commonProps.onClick}
          />
        );
      } else if (selectedVariant === "data") {
        return (
          <Component
            title={dataTitle}
            value={dataValue}
            icon={dataIcon}
            trend={dataTrend}
          />
        );
      }
    } else if (selectedComponent === "input") {
      if (selectedVariant === "text") {
        return (
          <Component
            label={inputLabel}
            placeholder={inputPlaceholder}
            required={inputRequired}
            error={inputError || undefined}
          />
        );
      } else if (selectedVariant === "select") {
        return (
          <Component
            label={inputLabel}
            required={inputRequired}
            options={[
              { value: "option1", label: t('defaultValues.selectOptions.option1') },
              { value: "option2", label: t('defaultValues.selectOptions.option2') },
              { value: "option3", label: t('defaultValues.selectOptions.option3') },
            ]}
          />
        );
      } else if (selectedVariant === "checkbox") {
        return (
          <Component
            label={inputLabel}
            description={t('defaultValues.checkboxDescription')}
            checked={false}
            onChange={() => {}}
          />
        );
      }
    }

    return null;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('subtitle')}
        </p>
      </div>

      {/* Top Controls */}
      <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Component Type */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              {t('controls.componentType')}
            </label>
            <div className="relative">
              <MousePointer className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="button">{t('componentTypes.buttons')}</option>
                <option value="card">{t('componentTypes.cards')}</option>
                <option value="input">{t('componentTypes.inputs')}</option>
              </select>
            </div>
          </div>

          {/* Component Variant */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              {t('controls.variant')}
            </label>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-blue-400 dark:hover:bg-gray-700"
            >
              {Object.entries(componentVariants[selectedComponent] || {}).map(
                ([key, variant]) => (
                  <option key={key} value={key}>
                    {variant.name}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Preview Mode */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              {t('controls.previewMode')}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setPreviewMode("light")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  previewMode === "light"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-600"
                }`}
              >
                <Sun className="w-4 h-4" />
                {t('preview.light')}
              </button>
              <button
                onClick={() => setPreviewMode("dark")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  previewMode === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-600"
                }`}
              >
                <Moon className="w-4 h-4" />
                {t('preview.dark')}
              </button>
            </div>
          </div>

          {/* Favorites Toggle */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              {t('controls.myFavorites', { count: favorites.length })}
            </label>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                showFavorites
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${showFavorites ? "fill-current" : ""}`}
              />
              {showFavorites ? t('controls.hideFavorites') : t('controls.showFavorites')}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {t('controls.customizationControls')}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={resetToDefaults}
                className="px-3 py-1 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                {t('controls.reset')}
              </button>
              <button
                onClick={randomizeValues}
                className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors flex items-center gap-1"
              >
                <Shuffle className="w-3 h-3" />
                {t('controls.random')}
              </button>
            </div>
          </div>

          {/* Dynamic Controls Based on Component */}
          <div className="space-y-6">
            {/* Button Controls */}
            {selectedComponent === "button" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('buttonControls.buttonText')}
                  </label>
                  <TextInput
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    placeholder={t('defaultValues.buttonText')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('buttonControls.buttonSize')}
                  </label>
                  <div className="flex gap-2">
                    {["small", "medium", "large"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setButtonSize(size)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          buttonSize === size
                            ? "bg-blue-500 text-white"
                            : "bg-gray-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-600"
                        }`}
                      >
                        {t(`buttonControls.sizes.${size}`)}
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
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('buttonControls.disabled')}
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={buttonLoading}
                      onChange={(e) => setButtonLoading(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('buttonControls.loading')}
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* Card Controls */}
            {selectedComponent === "card" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('cardControls.cardTitle')}
                  </label>
                  <TextInput
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    placeholder={t('cardControls.cardTitlePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('cardControls.cardDescription')}
                  </label>
                  <textarea
                    value={cardDescription}
                    onChange={(e) => setCardDescription(e.target.value)}
                    placeholder={t('cardControls.cardDescriptionPlaceholder')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Pricing Card Specific Controls */}
                {selectedVariant === "pricing" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('pricingControls.planName')}
                        </label>
                        <TextInput
                          value={pricingPlan}
                          onChange={(e) => setPricingPlan(e.target.value)}
                          placeholder={t('pricingControls.planPlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('pricingControls.price')}
                        </label>
                        <TextInput
                          value={pricingPrice}
                          onChange={(e) => setPricingPrice(e.target.value)}
                          placeholder={t('pricingControls.pricePlaceholder')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        {t('pricingControls.features')}
                      </label>
                      <TextInput
                        value={pricingFeatures.join(", ")}
                        onChange={(e) =>
                          setPricingFeatures(
                            e.target.value.split(", ").filter((f) => f.trim())
                          )
                        }
                        placeholder={t('pricingControls.featuresPlaceholder')}
                      />
                    </div>
                  </>
                )}

                {/* User Card Specific Controls */}
                {selectedVariant === "user" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('userCardControls.userName')}
                        </label>
                        <TextInput
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder={t('userCardControls.userNamePlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('userCardControls.email')}
                        </label>
                        <TextInput
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder={t('userCardControls.emailPlaceholder')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        {t('userCardControls.role')}
                      </label>
                      <TextInput
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        placeholder={t('userCardControls.rolePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        {t('userCardControls.avatarUrl')}
                      </label>
                      <TextInput
                        value={userAvatar}
                        onChange={(e) => setUserAvatar(e.target.value)}
                        placeholder={t('userCardControls.avatarPlaceholder')}
                      />
                    </div>
                  </>
                )}

                {/* Data Card Specific Controls */}
                {selectedVariant === "data" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('dataCardControls.dataTitle')}
                        </label>
                        <TextInput
                          value={dataTitle}
                          onChange={(e) => setDataTitle(e.target.value)}
                          placeholder={t('dataCardControls.dataTitlePlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('dataCardControls.value')}
                        </label>
                        <TextInput
                          value={dataValue}
                          onChange={(e) => setDataValue(e.target.value)}
                          placeholder={t('dataCardControls.valuePlaceholder')}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('dataCardControls.icon')}
                        </label>
                        <TextInput
                          value={dataIcon}
                          onChange={(e) => setDataIcon(e.target.value)}
                          placeholder={t('dataCardControls.iconPlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          {t('dataCardControls.trend')}
                        </label>
                        <input
                          type="number"
                          value={dataTrend}
                          onChange={(e) =>
                            setDataTrend(parseInt(e.target.value) || 0)
                          }
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                          placeholder={t('dataCardControls.trendPlaceholder')}
                        />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {/* Input Controls */}
            {selectedComponent === "input" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('inputControls.label')}
                  </label>
                  <TextInput
                    value={inputLabel}
                    onChange={(e) => setInputLabel(e.target.value)}
                    placeholder={t('inputControls.labelPlaceholder')}
                  />
                </div>

                {selectedVariant === "text" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        {t('inputControls.placeholder')}
                      </label>
                      <TextInput
                        value={inputPlaceholder}
                        onChange={(e) => setInputPlaceholder(e.target.value)}
                        placeholder={t('inputControls.placeholderPlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        {t('inputControls.errorMessage')}
                      </label>
                      <TextInput
                        value={inputError}
                        onChange={(e) => setInputError(e.target.value)}
                        placeholder={t('inputControls.errorPlaceholder')}
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
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('inputControls.required')}
                    </span>
                  </label>
                </div>
              </>
            )}
          </div>

          {/* Code Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Code className="w-4 h-4 text-gray-500" />
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('codeSection.generatedCode')}
                </label>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 transition-colors flex items-center gap-1"
                >
                  <Eye className="w-3 h-3" />
                  {showCode ? t('codeSection.hide') : t('codeSection.show')}
                </button>
              </div>
              <button
                onClick={copyCode}
                className="px-4 py-2 bg-green-500 w-fit text-white rounded-lg text-sm hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copiedCode || t('codeSection.copyCode')}
              </button>
            </div>

            {showCode && (
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto border border-gray-200 dark:border-gray-700">
                  <code className="text-gray-800 dark:text-gray-200 font-mono break-all">
                    {generateCode()}
                  </code>
                </pre>
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    {t('codeSection.language')}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-500" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {t('preview.livePreview')}
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
              previewMode === "dark"
                ? "bg-gray-900 border border-gray-700"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <div className={previewMode === "dark" ? "dark" : ""}>
              <div className="w-full max-w-sm">{renderComponent()}</div>
            </div>
          </div>

          {/* Component Info */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {t('preview.componentInfo')}
              </span>
            </div>
            <div className="text-sm text-blue-800 dark:text-blue-300">
              <p>
                <strong>{t('preview.type')}:</strong>{" "}
                {componentVariants[selectedComponent]?.[selectedVariant]?.name}
              </p>
              <p>
                <strong>{t('preview.variant')}:</strong>{" "}
                {componentVariants[selectedComponent]?.[selectedVariant]?.name}
              </p>
              <p>
                <strong>{t('preview.interactive')}:</strong>{" "}
                {selectedComponent === "button"
                  ? t('preview.clickToTest')
                  : selectedComponent === "card" && selectedVariant === "user"
                  ? t('preview.clickToTest')
                  : t('preview.displayOnly')}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <SecondaryButton
              onClick={resetToDefaults}
              className="flex-1 sm:flex-none"
            >
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-4 h-4" />
                {t('actions.reset')}
              </div>
            </SecondaryButton>

            <SuccessButton onClick={randomizeValues}>
              <div className="flex items-center gap-2">
                <Shuffle className="w-4 h-4" />
                {t('actions.randomize')}
              </div>
            </SuccessButton>

            <button
              onClick={() => toggleFavorite(selectedComponent, selectedVariant)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 sm:flex-none flex items-center justify-center gap-2 ${
                isFavorite(selectedComponent, selectedVariant)
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/50"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${
                  isFavorite(selectedComponent, selectedVariant)
                    ? "fill-current"
                    : ""
                }`}
              />
              {isFavorite(selectedComponent, selectedVariant)
                ? t('favorites.removeFavorite')
                : t('favorites.addFavorite')}
            </button>

            <button
              onClick={copyCode}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors flex-1 sm:flex-none flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" />
              {t('actions.copyCode')}
            </button>
          </div>
        </div>
      </div>

      {/* Favorites Section */}
      {showFavorites && (
        <div className="mt-12 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6 shadow-lg border border-pink-200 dark:border-pink-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('favorites.title', { count: favorites.length })}
              </h2>
            </div>
            {favorites.length > 0 && (
              <button
                onClick={clearAllFavorites}
                className="px-3 py-1 text-sm text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
              >
                {t('favorites.clearAll')}
              </button>
            )}
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {t('favorites.noFavorites')}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {t('favorites.noFavoritesDesc')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {favorites.map((favorite) => {
                const variant =
                  componentVariants[favorite.componentType]?.[
                    favorite.variantKey
                  ];
                if (!variant) return null;

                return (
                  <div
                    key={favorite.id}
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-pink-200 dark:border-pink-700 hover:border-pink-300 dark:hover:border-pink-600 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedComponent(favorite.componentType);
                      setSelectedVariant(favorite.variantKey);
                      setShowFavorites(false);
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                        {favorite.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(
                            favorite.componentType,
                            favorite.variantKey
                          );
                        }}
                        className="text-pink-500 hover:text-pink-600 transition-colors"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {t(`componentTypes.${favorite.componentType}`)} {t('favorites.componentSuffix')}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {t('favorites.addedDate', { date: new Date(favorite.addedAt).toLocaleDateString() })}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* All Variants Showcase */}
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          {selectedComponent === "button" && (
            <Square className="w-5 h-5 text-purple-500" />
          )}
          {selectedComponent === "card" && (
            <FileText className="w-5 h-5 text-purple-500" />
          )}
          {selectedComponent === "input" && (
            <Type className="w-5 h-5 text-purple-500" />
          )}
         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            All{" "}
            {selectedComponent.charAt(0).toUpperCase() +
              selectedComponent.slice(1)}{" "}
            Variants
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(componentVariants[selectedComponent] || {}).map(
            ([key, variant]) => (
              <div
                key={key}
                className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="mb-3 flex justify-center">
                  <div
                    onClick={() => setSelectedVariant(key)}
                    className={`cursor-pointer transition-all ${
                      selectedVariant === key
                        ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800 rounded-lg"
                        : ""
                    }`}
                  >
                    {/* Render mini version of each variant */}
                    {selectedComponent === "button" && (
                      <variant.component
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVariant(key);
                        }}
                      >
                        {variant.name.split(" ")[0]}
                      </variant.component>
                    )}
                    {selectedComponent === "card" && key === "simple" && (
                      <div className="scale-75 origin-center">
                        <variant.component
                          title={t('showcase.sample')}
                          description={t('showcase.preview')}
                        />
                      </div>
                    )}
                    {selectedComponent === "card" && key === "feature" && (
                      <div className="scale-75 origin-center">
                        <variant.component
                          title="Feature"
                          description={t('showcase.preview')}
                        />
                      </div>
                    )}
                    {selectedComponent === "card" && key === "pricing" && (
                      <div className="scale-75 origin-center">
                        <variant.component
                          plan="Pro"
                          price="$9"
                          features={["Feature 1"]}
                        />
                      </div>
                    )}
                    {selectedComponent === "card" && key === "user" && (
                      <div className="scale-75 origin-center">
                        <variant.component
                          name="John"
                          email="john@example.com"
                          role="Developer"
                          avatar="https://i.pravatar.cc/150?img=1"
                        />
                      </div>
                    )}
                    {selectedComponent === "card" && key === "data" && (
                      <div className="scale-75 origin-center">
                        <variant.component
                          title="Users"
                          value="123"
                          icon="👥"
                          trend={5}
                        />
                      </div>
                    )}
                    {selectedComponent === "input" && (
                      <div className="scale-90 origin-center">
                        <variant.component
                          label={variant.name}
                          placeholder={t('showcase.preview')}
                          {...(key === "select"
                            ? {
                                options: [{ value: "opt1", label: t('defaultValues.selectOptions.option1') }],
                              }
                            : {})}
                          {...(key === "checkbox"
                            ? { checked: false, onChange: () => {} }
                            : {})}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                  {variant.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t('showcase.clickToCustomize')}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5" />
          <h2 className="text-xl font-semibold">{t('stats.title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MousePointer className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">
              {Object.keys(componentVariants.button).length}
            </div>
            <div className="text-sm opacity-80">{t('stats.buttonTypes')}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <CreditCard className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">
              {Object.keys(componentVariants.card).length}
            </div>
            <div className="text-sm opacity-80">{t('stats.cardTypes')}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Type className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">
              {Object.keys(componentVariants.input).length}
            </div>
            <div className="text-sm opacity-80">{t('stats.inputTypes')}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-2xl font-bold">{favorites.length}</div>
            <div className="text-sm opacity-80">{t('stats.favorites')}</div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}