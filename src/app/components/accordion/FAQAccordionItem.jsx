import { ChevronDown, Plus, Minus } from "lucide-react";

//* Single Accordion Item Component
const FAQAccordionItem = ({
  title, //? Title of the accordion item
  content, //? Content/body of the accordion item
  isOpen, //? Boolean: whether this item is open or closed
  onToggle, //? Function to call when toggling open/close
  variant = "default", //? Icon style: "default" (chevron) or "plus" (plus/minus)
  icon, //? Optional icon to display next to the title
}) => {
  return (
    <div
      //* Container styling changes based on open/closed state
      className={`border rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-blue-500 shadow-md"
          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
      }`}
    >
      <button
        onClick={onToggle}
        //* Button styling changes based on open/closed state
        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-200 ${
          isOpen
            ? "bg-blue-50 dark:bg-blue-900/20"
            : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
        }`}
      >
        <div className="flex items-center gap-3 flex-1">
          {/* Optional icon on the left */}
          {icon && (
            <span
              className={`transition-colors ${
                isOpen ? "text-blue-600 dark:text-blue-400" : "text-gray-400"
              }`}
            >
              {icon}
            </span>
          )}
          {/* Accordion item title */}
          <span
            className={`font-semibold transition-colors ${
              isOpen
                ? "text-blue-900 dark:text-blue-100"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {title}
          </span>
        </div>

        {/* Right-side icon: plus/minus or chevron, depending on variant */}
        {variant === "plus" ? (
          isOpen ? (
            <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400 transition-transform" />
          )
        ) : (
          <ChevronDown
            className={`w-5 h-5 transition-all duration-300 ${
              isOpen
                ? "rotate-180 text-blue-600 dark:text-blue-400"
                : "text-gray-400"
            }`}
          />
        )}
      </button>

      {/* Collapsible content area, expands/contracts based on isOpen */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordionItem;
