"use client";
import { useState, useEffect, useRef } from "react";
import { Search, SparklesIcon, X } from "lucide-react";
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

// [All imports remain the same as in your original code]
import { useAnalytics } from "../context/AnalyticsContext";
import { useTheme } from "../context/ThemeContext";

// Button Imports
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import GhostButton from "./buttons/GhostButton";
import IconButton from "./buttons/IconButton";
import NeonButton from "./buttons/NeonButton";
import GradientButton from "./buttons/GradientButton";
import OutlineButton from "./buttons/OutlineButton";
import DangerButton from "./buttons/DangerButton";
import SuccessButton from "./buttons/SuccessButton";
import GlassButton from "@/app/components/buttons/GlassButton";
import RainbowButton from "@/app/components/buttons/RainbowButton";

// Cards
import SimpleCard from "./cards/SimpleCard";
import ImageCard from "./cards/ImageCard";
import FeatureCard from "./cards/FeatureCard";
import PricingCard from "./cards/PricingCard";
import DataCard from "./cards/DataCard";
import SmartCard from "./cards/SmartCard";
import UserCard from "@/app/components/cards/UserCard";

// Inputs
import TextInput from "./inputs/TextInput";
import Select from "./inputs/Select";
import Checkbox from "./inputs/Checkbox";
import PasswordInput from "./inputs/PasswordInput";
// ReCaptcha is loaded dynamically below to avoid SSR/render issues

// Nav
import Tabs from "./navigation/Tabs";
import Breadcrumb from "./navigation/Breadcrumb";
import Pagination from "./navigation/Pagination";

//Backgrounds
import InteractiveTiles from "./backgrounds/InteractiveTiles";

//Badge
import { Badge, Chip } from "./Badge";

// alerts
import ALertManager from "./alert/ALertManager";

// loaders
import Loader from "./loaders/Loader";
import DualRingLoader from "./loaders/DualRingLoader";
import DotsLoader from "./loaders/DotsLoader";
import BarLoader from "./loaders/BarLoader";

// Tooltips
import Tooltip from "./tooltips/Tooltip";
import AnimatedTooltip from "./tooltips/AnimatedTooltip";

// Form Input
import { DatePicker } from "./FormInput/DatePicker";
import { FileUpload } from "./FormInput/FileUpload";
import { FormValidation } from "./FormInput/FormValidation";
import { Slider } from "./FormInput/Slider";
import LoginForm from "./FormInput/LoginForm";
import SignupPage from "./FormInput/SignupPage";
import OTPVerification from "./FormInput/OTPVerification";

// Avatar
import { Avatar, AvatarGroup } from "./Avatar/Avatar";

// Accordion
import Accordion from "./Accordion/index";

// Calendar
import Calendar from "./Calender/Calendar";

// icons
import { HiOutlineRefresh } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";

export default function Page() {
  // Translations
  const t = useTranslations('comps');

  // Search and Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Analytics
  const { trackComponentView } = useAnalytics();

  // Theme
  const { darkMode } = useTheme();

  // Track page view - only once on mount
  useEffect(() => {
    trackComponentView("ComponentsPage");
  }, []);

  // Inputs
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  // Data
  const selectOptions = [
    { value: "option1", label: t('selectOptions.option1') },
    { value: "option2", label: t('selectOptions.option2') },
    { value: "option3", label: t('selectOptions.option3') },
  ];

  const tabsData = [
    {
      label: t('tabs.dashboard'),
      content: <div className="p-4">{t('tabs.dashboardContent')}</div>,
      badge: "3",
    },
    {
      label: t('tabs.analytics'),
      content: <div className="p-4">{t('tabs.analyticsContent')}</div>,
    },
    {
      label: t('tabs.settings'),
      content: <div className="p-4">{t('tabs.settingsContent')}</div>,
    },
  ];

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: "/" },
    { label: t('breadcrumb.components'), href: "/components" },
    { label: t('breadcrumb.navigation'), href: "/components/navigation" },
    { label: t('breadcrumb.breadcrumb') },
  ];

  // avatar
  const users = [
    {
      src: "https://randomuser.me/api/portraits/women/68.jpg",
      alt: "Alice",
      online: true,
    },
    {
      src: "https://randomuser.me/api/portraits/men/45.jpg",
      alt: "Bob",
      online: false,
    },
    {
      src: "https://randomuser.me/api/portraits/men/32.jpg",
      alt: "Charlie",
      online: true,
    },
    {
      src: "https://randomuser.me/api/portraits/women/12.jpg",
      alt: "Dana",
      online: false,
    },
  ];

  // Demo data for Calendar
  const today = new Date();
  const fmt = (d) => d.toISOString().slice(0, 10);
  const calendarEvents = [
    { date: fmt(today), label: "Today", color: "#6366f1" },
    { date: fmt(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)), label: "Release", color: "#22c55e" },
    { date: fmt(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)), label: "Review", color: "#f59e0b" },
  ];

  // All components with search data
  const allComponents = {

    buttons: [
      {
        name: t('buttons.primary.name'),
        component: <PrimaryButton>{t('buttons.primary.label')}</PrimaryButton>,
        keywords: ["primary", "main", "action", "cta"],
        desc: t('buttons.primary.desc'),
      },
      {
        name: t('buttons.gradient.name'),
        component: <GradientButton>{t('buttons.gradient.label')}</GradientButton>,
        keywords: ["gradient", "colorful", "bright", "cta"],
        desc: t('buttons.gradient.desc'),
      },
      {
        name: t('buttons.neon.name'),
        component: <NeonButton>{t('buttons.neon.label')}</NeonButton>,
        keywords: ["neon", "glow", "bright", "futuristic"],
        desc: t('buttons.neon.desc'),
      },
      {
        name: t('buttons.secondary.name'),
        component: <SecondaryButton>{t('buttons.secondary.label')}</SecondaryButton>,
        keywords: ["secondary", "alternate"],
        desc: t('buttons.secondary.desc'),
      },
      {
        name: t('buttons.ghost.name'),
        component: <GhostButton>{t('buttons.ghost.label')}</GhostButton>,
        keywords: ["ghost", "transparent", "subtle"],
        desc: t('buttons.ghost.desc'),
      },
      {
        name: t('buttons.outline.name'),
        component: <OutlineButton>{t('buttons.outline.label')}</OutlineButton>,
        keywords: ["outline", "border", "stroke"],
        desc: t('buttons.outline.desc'),
      },
      {
        name: t('buttons.danger.name'),
        component: <DangerButton>{t('buttons.danger.label')}</DangerButton>,
        keywords: ["danger", "error", "delete", "warning", "red"],
        desc: t('buttons.danger.desc'),
      },
      {
        name: t('buttons.success.name'),
        component: <SuccessButton>{t('buttons.success.label')}</SuccessButton>,
        keywords: ["success", "confirm", "done", "green"],
        desc: t('buttons.success.desc'),
      },
      {
        name: t('buttons.icon.name'),
        component: <IconButton aria-label="star">★</IconButton>,
        keywords: ["icon", "star", "symbol"],
        desc: t('buttons.icon.desc'),
      },
      {
        name: t('buttons.rainbow.name'),
        component: <RainbowButton>{t('buttons.rainbow.label')}</RainbowButton>,
        keywords: ["rainbow", "action", "colorful"],
        desc: t('buttons.rainbow.desc'),
      },
      {
        name: t('buttons.glass.name'),
        component: <GlassButton>{t('buttons.glass.label')}</GlassButton>,
        keywords: ['glass', 'cta', 'action'],
        desc: t('buttons.glass.desc')
      },
    ],
    cards: [
      {
        name: t('cards.simple.name'),
        component: (
          <SimpleCard
            title={t('cards.simple.title')}
            description={t('cards.simple.description')}
          />
        ),
        keywords: ["simple", "basic", "minimal"],
      },
      {
        name: t('cards.smart.name'),
        component: (
          <SmartCard
            title={t('cards.smart.title')}
            description={t('cards.smart.description')}
            footer={<PrimaryButton>{t('cards.smart.footer')}</PrimaryButton>}
            imageSrc="https://tse2.mm.bing.net/th/id/OIP.JRfh9R3XUoRd3vhgT3rEFwHaEn?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        ),
        keywords: ["smart", "gradient", "card", "hover", "footer", "image"],
      },
      {
        name: t('cards.image.name'),
        component: (
          <ImageCard title={t('cards.image.title')} description={t('cards.image.description')} />
        ),
        keywords: ["image", "picture", "visual"],
      },
      {
        name: t('cards.feature.name'),
        component: (
          <FeatureCard
            title={t('cards.feature.title')}
            description={t('cards.feature.description')}
          />
        ),
        keywords: ["feature", "highlight", "benefit"],
      },
      {
        name: t('cards.pricing.name'),
        component: (
          <PricingCard
            plan={t('cards.pricing.plan')}
            price={t('cards.pricing.price')}
            features={[
              t('cards.pricing.features.0'),
              t('cards.pricing.features.1'),
              t('cards.pricing.features.2')
            ]}
          />
        ),
        keywords: ["pricing", "plan", "subscription", "price"],
      },
      {
        name: t('cards.data.name'),
        component: (
          <DataCard title={t('cards.data.title')} value="27" icon="📂" trend={8} />
        ),
        keywords: ["data", "stats", "analytics", "metrics"],
      },
    ],
    inputs: [
      {
        name: t('inputs.text.name'),
        component: <TextInput label={t('inputs.text.label')} placeholder={t('inputs.text.placeholder')} />,
        keywords: ["text", "input", "field", "form"],
      },
      {
        name: t('inputs.password.name'),
        component: <PasswordInput value="" onChange={() => {}} placeholder={t('inputs.password.placeholder')} />,
        keywords: ["password", "input", "field", "form", "show", "hide"],
      },
      {
        name: t('inputs.select.name'),
        component: <Select label={t('inputs.select.label')} options={selectOptions} />,
        keywords: ["select", "dropdown", "options", "choice"],
      },
      {
        name: t('inputs.checkbox.name'),
        component: (
          <Checkbox
            label={t('inputs.checkbox.label')}
            description={t('inputs.checkbox.description')}
            checked={false}
            onChange={() => { }}
          />
        ),
        keywords: ["checkbox", "check", "toggle", "boolean"],
      },
      {
        name: t('inputs.loginForm.name'),
        component: (
          <LoginForm
            variant="minimal"
            showSocialLogin={true}
            onLogin={(data) => console.log('Demo login:', data)}
            onSignup={() => console.log('Demo signup clicked')}
            onForgotPassword={() => console.log('Demo forgot password clicked')}
          />
        ),
        keywords: ["login", "form", "authentication", "signin", "auth", "email", "password"],
        desc: t('inputs.loginForm.desc')
      },
      {
        name: t('inputs.calendar.name'),
        component: (
          <div className="max-w-md">
            <Calendar events={calendarEvents} />
          </div>
        ),
        keywords: ["calendar", "date", "schedule", "month", "events"],
        desc: t('inputs.calendar.desc')
      },
    ],
    backgrounds: [
      {
        name: t('backgrounds.interactiveTiles.name'),
        component: <InteractiveTiles />,
        keywords: ["interactive", "tiles", "backgrounds", "grid"],
        desc: t('backgrounds.interactiveTiles.desc'),
      },
    ],
    navigation: [
      {
        name: t('navigation.breadcrumb.name'),
        component: <Breadcrumb items={breadcrumbItems} />,
        keywords: ["breadcrumb", "navigation", "path", "hierarchy"],
      },
      {
        name: t('navigation.tabs.name'),
        component: <Tabs tabs={tabsData} defaultTab={0} />,
        keywords: ["tabs", "navigation", "switch", "toggle"],
      },
      {
        name: t('navigation.pagination.name'),
        component: (
          <Pagination currentPage={1} totalPages={5} maxVisiblePages={3} />
        ),
        keywords: ["pagination", "pages", "navigation", "paging"],
      },
    ],
    badges: [
      {
        name: t('badges.badge.name'),
        component: (
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">{t('badges.badge.primary')}</Badge>
            <Badge variant="success" size="sm">{t('badges.badge.success')}</Badge>
            <Badge variant="warning" size="lg">{t('badges.badge.warning')}</Badge>
            <Badge variant="danger" pill>{t('badges.badge.danger')}</Badge>
            <Badge variant="neutral" onClose={() => { }}>{t('badges.badge.closable')}</Badge>
            <Badge variant="primary" icon={<SparklesIcon className="h-4 w-4" />}>{t('badges.badge.withIcon')}</Badge>
            <Badge variant="primary" count={5}>{t('badges.badge.notifications')}</Badge>
          </div>
        ),
        keywords: ["badge", "tag", "label", "status", "indicator"],
        desc: t('badges.badge.desc'),
      },
      {
        name: t('badges.chip.name'),
        component: (
          <div className="flex flex-wrap gap-2">
            <Chip variant="primary">{t('badges.chip.primary')}</Chip>
            <Chip variant="success">{t('badges.chip.success')}</Chip>
            <Chip variant="warning">{t('badges.chip.warning')}</Chip>
            <Chip variant="danger">{t('badges.chip.danger')}</Chip>
            <Chip variant="neutral" onRemove={() => { }}>{t('badges.chip.closable')}</Chip>
            <Chip variant="primary" icon={<SparklesIcon className="h-4 w-4" />}>{t('badges.chip.withIcon')}</Chip>
          </div>
        ),
        keywords: ["chip", "tag", "label", "filter", "category"],
        desc: t('badges.chip.desc'),
      },
    ],
    utility: [
      {
        name: t('utility.alert.name'),
        component: (
          <div className="flex justify-center items-center">
            <ALertManager />
          </div>
        ),
        keywords: ['alert', 'popup'],
      }, 
      {
        name: t('utility.loaders.name'),
        component: (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex items-center flex-col gap-10">
              <h1 className=" bg-blue-600 text-left font-semibold text-xl shadow-2xl border-2 p-4 rounded-full ">{t('utility.loaders.simple')}</h1>
              <Loader />
            </div>
            <div className="flex items-center flex-col gap-10">
              <h1 className=" text-left bg-black font-semibold text-xl shadow-2xl border-2 p-4 rounded-full ">{t('utility.loaders.dual')}</h1>
              <DualRingLoader />
            </div>
            <div className="flex items-center flex-col gap-10">
              <h1 className="bg-gradient-to-r from-red-400 via-green-500 to-blue-400 text-left font-semibold text-xl shadow-2xl border-2 p-4 rounded-full ">{t('utility.loaders.dots')}</h1>
              <div className="mt-8"><DotsLoader /></div>
            </div>
            <div className="flex items-center flex-col gap-10">
              <h1 className="bg-emerald-400 text-left font-semibold text-xl shadow-2xl border-2 p-4 rounded-full ">{t('utility.loaders.bar')}</h1>
              <div className="mt-4">
                <BarLoader />
              </div>
            </div>
          </div>
        ),
        keywords: ['spinner', 'loader', 'loading'],
      }, 
      {
        name: t('utility.tooltips.name'),
        component: (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 ml-4">
            <div className="flex items-center flex-col gap-8">
              <h1 className=" bg-gray-900 text-left font-semibold text-lg shadow-2xl border-2 py-2 px-4 rounded-full ">{t('utility.tooltips.simple')}</h1>
              <Tooltip text={t('utility.tooltips.refreshText')}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  <HiOutlineRefresh size={26} />
                </button>
              </Tooltip>
            </div>
            <div className="flex items-center flex-col gap-8">
              <h1 className=" bg-red-900 text-left font-semibold text-lg shadow-2xl border-2 py-2 px-4 rounded-full ">{t('utility.tooltips.animated')}</h1>
              <AnimatedTooltip text={t('utility.tooltips.deleteText')}>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  <FaTrash size={26} />
                </button>
              </AnimatedTooltip>
            </div>
          </div>
        ),
        keywords: ['tooltip', 'popups'],
      }
    ],
    accordion: [
      {
        name: "",
        component: (
          <div className="">
            <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Basic Accordion */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('accordion.basic.title')}</h3>
                <Accordion
                  variant="bordered"
                  defaultOpen={0}
                  items={[
                    {
                      title: t('accordion.basic.items.0.title'),
                      content: t('accordion.basic.items.0.content')
                    },
                    {
                      title: t('accordion.basic.items.1.title'),
                      content: t('accordion.basic.items.1.content')
                    },
                    {
                      title: t('accordion.basic.items.2.title'),
                      content: t('accordion.basic.items.2.content')
                    },
                    {
                      title: t('accordion.basic.items.3.title'),
                      content: t('accordion.basic.items.3.content')
                    },
                  ]}
                />
              </div>

              {/* Multiple Open Accordion */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('accordion.multiple.title')}</h3>
                <Accordion
                  allowMultiple
                  variant="shadow"
                  items={[
                    {
                      title: t('accordion.multiple.items.0.title'),
                      content: t('accordion.multiple.items.0.content')
                    },
                    {
                      title: t('accordion.multiple.items.1.title'),
                      content: t('accordion.multiple.items.1.content')
                    },
                    {
                      title: t('accordion.multiple.items.2.title'),
                      content: t('accordion.multiple.items.2.content')
                    },
                    {
                      title: t('accordion.multiple.items.3.title'),
                      content: t('accordion.multiple.items.3.content')
                    },
                  ]}
                />
              </div>

              {/* Minimal Accordion */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('accordion.minimal.title')}</h3>
                <Accordion
                  variant="minimal"
                  items={[
                    {
                      title: t('accordion.minimal.items.0.title'),
                      content: t('accordion.minimal.items.0.content')
                    },
                    {
                      title: t('accordion.minimal.items.1.title'),
                      content: t('accordion.minimal.items.1.content')
                    },
                    {
                      title: t('accordion.minimal.items.2.title'),
                      content: t('accordion.minimal.items.2.content')
                    },
                  ]}
                />
              </div>

              {/* Always Open Accordion */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('accordion.alwaysOpen.title')}</h3>
                <Accordion
                  alwaysOpen
                  variant="minimal"
                  items={[
                    {
                      title: t('accordion.alwaysOpen.items.0.title'),
                      content: t('accordion.alwaysOpen.items.0.content')
                    },
                    {
                      title: t('accordion.alwaysOpen.items.1.title'),
                      content: t('accordion.alwaysOpen.items.1.content')
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        ),
        keywords: ['accordion', 'collapsible', 'faq', 'expandable'],
      }
    ]
  };

  // Filter logic
  const getFilteredComponents = () => {
    let components = {};

    // Apply type filter
    if (filterType === "all") {
      components = allComponents;
    } else {
      components = { [filterType]: allComponents[filterType] };
    }

    // Apply search filter
    if (searchTerm) {
      const filtered = {};
      Object.keys(components).forEach((type) => {
        const matchedComponents = components[type].filter(
          (comp) =>
            comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comp.keywords.some((keyword) =>
              keyword.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        if (matchedComponents.length > 0) {
          filtered[type] = matchedComponents;
        }
      });
      return filtered;
    }

    return components;
  };

  const filteredComponents = getFilteredComponents();
  const totalResults = Object.values(filteredComponents).reduce(
    (total, components) => total + components.length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Glassmorphism Hero Header */}
      <section className="relative max-w-5xl mx-auto px-4 mt-8 mb-16">
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl py-12 px-8 flex flex-col items-center gap-6 border border-gray-50 dark:border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            {t('hero.description')}
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('search.placeholder')}
                className="w-full pl-9 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="sm:w-48">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full py-3 px-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm"
              >
                <option value="all">{t('filter.all')}</option>
                <option value="buttons">{t('filter.buttons')}</option>
                <option value="backgrounds">{t('filter.backgrounds')}</option>
                <option value="cards">{t('filter.cards')}</option>
                <option value="inputs">{t('filter.inputs')}</option>
                <option value="navigation">{t('filter.navigation')}</option>
                <option value="badges">{t('filter.badges')}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {(searchTerm || filterType !== "all") && (
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200">
              {t('search.results', { 
                count: totalResults, 
                search: searchTerm,
                filter: filterType !== 'all' ? t(`filter.${filterType}`) : 'all'
              })}
            </p>
          </div>
        </div>
      )}

      {/* No Results */}
      {totalResults === 0 && (
        <div className="max-w-5xl mx-auto px-4 text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {t('search.noResults')}
          </h3>
        </div>
      )}

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 space-y-16 pb-24">
        {/* Buttons Section */}
        {filteredComponents.buttons && (
          <section
            id="buttons"
            className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10 transition-colors duration-300"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex justify-center items-center gap-2 text-blue-700 dark:text-blue-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.buttons')} ({filteredComponents.buttons.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-full block" />
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredComponents.buttons.map((item, index) => (
                <div
                  key={index}
                  className={`${darkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-300 text-gray-900"
                    } shadow-md rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition w-60`}
                >
                  <div title={item.name} className="mb-3">
                    {item.component}
                  </div>
                  <div>
                    <p className="text-sm mt-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
{/* Racing Section */}
<div className="relative w-full py-16 px-6 flex flex-col items-center justify-center 
  bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
  rounded-3xl shadow-2xl overflow-hidden my-16">

  {/* Glassy overlay */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8">
    <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
      🏁 Game Section
    </h2>

    <section className="max-w-5xl mx-auto px-4">
      {/* <Test /> */}
    </section>
  </div>
</div>

        {/* Cards Section */}
        {filteredComponents.cards && (
          <section
            id="cards"
            className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-[#23293b] dark:via-[#1e142e] dark:to-[#222849] border border-purple-100 dark:border-purple-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex justify-center items-center gap-2 text-purple-600 dark:text-fuchsia-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.cards')} ({filteredComponents.cards.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-purple-300 to-fuchsia-300 rounded-full block" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.cards.map((item, index) => (
                <div key={index} title={item.name}>
                  {item.component}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Form Helpers Section */}
        {filteredComponents.formHelpers && (
          <section
            id="formHelpers"
            className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex justify-center items-center gap-2 text-blue-600 dark:text-blue-300">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                Form Helpers ({filteredComponents.formHelpers.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-blue-300 to-purple-300 rounded-full block" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.formHelpers.map((item, index) => (
                <div key={index} title={item.name} className="flex justify-center">
                  {item.component}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inputs Section */}
        {filteredComponents.inputs && (
          <section
            id="inputs"
            className="bg-white/90 w-full dark:bg-gray-900/90 border border-green-100 dark:border-green-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-green-700 dark:text-green-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.inputs')} ({filteredComponents.inputs.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-green-300 to-sky-300 rounded-full block" />
            </h2>
            <div className="max-w-lg space-y-6 flex flex-col justify-center">
              {filteredComponents.inputs.map((item, index) => (
                <div key={index} title={item.name}>
                  {item.component}
                </div>
              ))}
              {/* Show additional examples if all inputs are visible */}
              {filteredComponents.inputs.length ===
                allComponents.inputs.length && (
                  <>
                    <TextInput
                      label={t('inputs.emailAddress.label')}
                      placeholder={t('inputs.emailAddress.placeholder')}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      helperText={t('inputs.emailAddress.helperText')}
                      required
                      className="text-gray-100 bg-gray-600 px-4 py-2"
                    />
                    <TextInput
                      label={t('inputs.password.label')}
                      type="password"
                      placeholder={t('inputs.password.placeholder')}
                      error={t('inputs.password.error')}
                      className="text-gray-100 bg-gray-600 px-4 py-2"
                    />
                    <Select
                      label={t('inputs.chooseOption.label')}
                      options={selectOptions}
                      value={selectValue}
                      onChange={(e) => setSelectValue(e.target.value)}
                      required
                      className="text-gray-100 bg-gray-600 px-4 py-2"
                    />
                    <Checkbox
                      label={t('inputs.termsConditions.label')}
                      description={t('inputs.termsConditions.description')}
                      checked={checkboxValue}
                      onChange={(e) => setCheckboxValue(e.target.checked)}
                    />
                    <Checkbox
                      label={t('inputs.disabledOption.label')}
                      description={t('inputs.disabledOption.description')}
                      checked={false}
                      onChange={() => { }}
                      disabled
                    />
                  </>
                )}
            </div>
          </section>
        )}

        {/* Backgrounds Section */}
        {filteredComponents.backgrounds && (
          <section
            id="backgrounds"
            className="bg-white/90 w-full dark:bg-gray-900/90 border border-indigo-100 dark:border-indigo-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-indigo-700 dark:text-indigo-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.backgrounds')} ({filteredComponents.backgrounds.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full block" />
            </h2>
            <div className="max-w-3xl">
              {filteredComponents.backgrounds.map((item, index) => (
                <div key={index} title={item.name} className="mb-6">
                  {item.desc && (
                    <p className="mb-2 font-bold text-sm text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                  )}
                  {item.component}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Utility components */}
        {filteredComponents.utility && (
          <section id="utility" className="bg-gradient-to-br from-pink-400 via-blue-400 to-red-400 border dark:border-amber-600 border-red-950 shadow-2xl rounded-2xl p-10">
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-gray-950">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.utility')} ({filteredComponents.utility.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-pink-200 to-pink-700 rounded-full block" />
            </h2>
            <div className="space-y-8">
              {filteredComponents.utility.map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl dark:text-gray-950 font-medium mb-8">{item.name}</h3>
                  <div title={item.name}>{item.component}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navigation Section */}
        {filteredComponents.navigation && (
          <section
            id="navigation"
            className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-[#3a3020] dark:via-[#412920] dark:to-[#16101a] border border-yellow-100 dark:border-yellow-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-yellow-600 dark:text-yellow-200">
              <span className="whitespace-nowrap text-[1.1rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.navigation')} ({filteredComponents.navigation.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full block" />
            </h2>
            <div className="space-y-8">
              {filteredComponents.navigation.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-3">{item.name}</h3>
                  <div title={item.name}>{item.component}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Feedback Section - Always show when no specific filter is applied */}
        {filterType === "all" && !searchTerm && (
          <section className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10">
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-blue-700 dark:text-blue-200">
              <span className="whitespace-nowrap text-[1.2rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.feedback')}
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-blue-300 to-violet-300 rounded-full block" />
            </h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-green-50 to-green-100/80 dark:from-green-900 dark:to-green-700 text-green-800 dark:text-green-200 rounded-xl font-semibold shadow-sm border border-green-200 dark:border-green-800">
                <span className="text-2xl">✔</span>
                <span>{t('feedback.success')}</span>
              </div>
              <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-red-50 to-red-100/80 dark:from-red-900 dark:to-red-700 text-red-800 dark:text-red-200 rounded-xl font-semibold shadow-sm border border-red-200 dark:border-red-800">
                <span className="text-2xl">⛔️</span>
                <span>{t('feedback.error')}</span>
              </div>
              <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-yellow-50 to-yellow-100/80 dark:from-yellow-900 dark:to-yellow-700 text-yellow-900 dark:text-yellow-300 rounded-xl font-semibold shadow-sm border border-yellow-200 dark:border-yellow-800">
                <span className="text-2xl">⚠️</span>
                <span>{t('feedback.warning')}</span>
              </div>
              <div className="flex items-center gap-2 p-5 bg-gradient-to-r from-blue-50 to-blue-100/80 dark:from-blue-900 dark:to-blue-700 text-blue-900 dark:text-blue-200 rounded-xl font-semibold shadow-sm border border-blue-200 dark:border-blue-800">
                <span className="text-2xl">ℹ️</span>
                <span>{t('feedback.info')}</span>
              </div>
            </div>
          </section>
        )}

        {filterType === "all" && !searchTerm && (
          <section className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10">
            {/* Heading */}
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-blue-700 dark:text-blue-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.formHelper')}
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-blue-300 to-violet-300 rounded-full block" />
            </h2>

            {/* Components Grid */}
            <div className="space-y-4">
              {/* Date Picker Card */}
              <div className="p-6 bg-gradient-to-r from-pink-50 to-pink-100/80 dark:from-pink-900 dark:to-pink-700 text-pink-900 dark:text-pink-100 rounded-xl font-medium shadow-sm border border-pink-200 dark:border-pink-800 w-full">
                <h3 className="text-lg font-semibold mb-2">📅 {t('formHelper.datePicker.title')}</h3>
                <DatePicker label={t('formHelper.datePicker.label')} />
              </div>

              {/* Slider Card */}
              <div className="w-full p-6 bg-gradient-to-r from-green-50 to-green-100/80 dark:from-green-900 dark:to-green-700 text-green-900 dark:text-green-100 rounded-xl font-medium shadow-sm border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold mb-2">🎚 {t('formHelper.slider.title')}</h3>
                <Slider min={0} max={50} />
              </div>

              {/* File Upload Card */}
              <div className="w-full p-6 bg-gradient-to-r from-yellow-50 to-yellow-100/80 dark:from-yellow-900 dark:to-yellow-700 text-yellow-900 dark:text-yellow-100 rounded-xl font-medium shadow-sm border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-semibold mb-2">📁 {t('formHelper.fileUpload.title')}</h3>
                <FileUpload />
              </div>

              {/* Form Validation Card */}
              <div className="w-full p-6 bg-gradient-to-r from-blue-50 to-blue-100/80 dark:from-blue-900 dark:to-blue-700 text-blue-900 dark:text-blue-100 rounded-xl font-medium shadow-sm border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold mb-2">
                  ✅ {t('formHelper.formValidation.title')}
                </h3>
                <FormValidation minLength={5} />
              </div>

              {/* ReCaptcha Card */}
              <div className="w-full p-6 bg-gradient-to-r from-indigo-50 to-indigo-100/80 dark:from-indigo-900 dark:to-indigo-700 text-indigo-900 dark:text-indigo-100 rounded-xl font-medium shadow-sm border border-indigo-200 dark:border-indigo-800">
                <h3 className="text-lg font-semibold mb-2">🔒 reCAPTCHA</h3>
                <div className="flex justify-center">
                  {(() => {
                    const DynamicReCaptcha = dynamic(() => import('./FormInput/ReCaptcha'), {
                      ssr: false,
                      loading: () => (
                        <div className="min-h-[78px] flex items-center justify-center">
                          <div className="text-indigo-700 dark:text-indigo-300 text-sm">
                            Loading reCAPTCHA...
                          </div>
                        </div>
                      ),
                    });
                    return (
                      <DynamicReCaptcha
                        siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onVerify={(token) => console.log('Verified:', token)}
                      />
                    );
                  })()}
                </div>
              </div>

              {/* Login Form Card */}
              <div className="w-full p-6 bg-gradient-to-r from-purple-50 to-purple-100/80 dark:from-purple-900 dark:to-purple-700 text-purple-900 dark:text-purple-100 rounded-xl font-medium shadow-sm border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold mb-2">
                  🔐 {t('formHelper.loginForm.title')}
                </h3>
                <div className="mt-4">
                  <LoginForm
                    variant="minimal"
                    onLogin={(data) => console.log('Demo login:', data)}
                    onSignup={() => console.log('Demo signup clicked')}
                    onForgotPassword={() => console.log('Demo forgot password clicked')}
                  />
                </div>
              </div>

              {/* Signup Page Card */}
              <div className="w-full flex flex-col justify-center p-6 bg-gradient-to-r from-green-50 to-green-100/80 dark:from-green-900 dark:to-green-700 text-green-900 dark:text-green-100 rounded-xl font-medium shadow-sm border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold mb-2">
                  📝 {t('formHelper.signupPage.title')}
                </h3>
                <div className="scale-90 w-full max-w-lg mx-auto mt-8 px-2 origin-top-left">
                  <SignupPage
                    onSignup={(data) => console.log('Signup:', data)}
                    onLogin={() => console.log('Navigate to login')}
                  />
                </div>
              </div>

              {/* OTP Verification Card */}
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-indigo-100/80 dark:from-indigo-900 dark:to-indigo-700 text-indigo-900 dark:text-indigo-100 rounded-xl font-medium shadow-sm border border-indigo-200 dark:border-indigo-800">
                <h3 className="text-lg font-semibold mb-2">
                  🔑 {t('formHelper.otpVerification.title')}
                </h3>
                <div className="mt-4">
                  <OTPVerification
                    length={6}
                    onVerify={async (code) => {
                      console.log('Verifying code', code);
                      await new Promise(r => setTimeout(r, 600));
                      if (code !== '123456') throw new Error(t('formHelper.otpVerification.tryCode'));
                    }}
                    onResend={async () => {
                      console.log('Resending OTP');
                      await new Promise(r => setTimeout(r, 400));
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Badges Section */}
        {filteredComponents.badges && (
          <section
            id="badges"
            className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-[#0f1b1a] dark:via-[#0a1a1a] dark:to-[#0a1a1a] border border-emerald-100 dark:border-emerald-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.badges')} ({filteredComponents.badges.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full block" />
            </h2>
            <div className="space-y-8">
              {filteredComponents.badges.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-3">{item.name}</h3>
                  <div title={item.name}>{item.component}</div>
                  {item.desc && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {users && users.length > 0 && (
          <section
            id="avatars"
            className="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-[#0f1a1b] dark:via-[#0a1a1a] dark:to-[#0a1a1a] border border-sky-100 dark:border-sky-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-sky-600 dark:text-sky-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.avatars')} ({users.length})
              </span>
              <span className="absolute top-10 h-1 w-full bg-gradient-to-r from-sky-300 to-indigo-300 rounded-full block" />
            </h2>

            <div className="space-y-8">
              {/* Single Avatars */}
              <div className="flex flex-wrap gap-4">
                {users.map((user, index) => (
                  <Avatar key={index} {...user} size="md" />
                ))}
              </div>

              {/* Avatar Group */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">{t('avatars.group')}</h3>
                <AvatarGroup avatars={users} size="md" max={4} />
              </div>
            </div>
          </section>
        )}

        {/* Accordion Section */}
        {filteredComponents.accordion && (
          <section
            id="accordion"
            className="bg-white/90 dark:bg-gray-900/90 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-10"
          >
            <h2 className="relative text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-pink-600 dark:text-pink-200">
              <span className="whitespace-nowrap text-[1.3rem] sm:text-2xl md:text-3xl lg:text-3xl">
                {t('sections.accordion')}
              </span>
            </h2>

            <div className="space-y-8">
              {filteredComponents.accordion.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-3">{item.name}</h3>
                  <div title={item.name}>{item.component}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}