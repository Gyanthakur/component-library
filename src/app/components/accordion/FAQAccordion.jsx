import { useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";

//* Main Accordion Component
const FAQAccordion = ({
  accordionItem = [],
  variant = "default",
  //? defaultOpenIndex determines which accordion item is open by default (by index).
  //? If null, all items are closed initially.
  defaultOpenIndex = null,
}) => {
  //? openIndexes holds the indexes of open accordion items.
  //? By default, it contains defaultOpenIndex if provided, otherwise it's empty.
  const [openIndexes, setOpenIndexes] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  //? handleToggle toggles the open/closed state of an accordion item.
  //? Only one item can be open at a time.
  const handleToggle = (index) => {
    setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
  };

  return (
    <div className="w-full space-y-3">
      {accordionItem.map((item, index) => (
        <FAQAccordionItem
          key={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
