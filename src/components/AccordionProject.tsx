
import React, { useState, useRef } from "react";
import { projects } from "../stores/data";

interface AccordionItemProps {
  name: string;
  date: string;
  url: string | undefined;
  // link: string | undefined;
  description: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  name,
  date,
  url,
  // link,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border ${
            isOpen ? "rounded-t-xl" : "rounded-xl"
          }`}
          onClick={toggleAccordion}
        >
          <span>
            {name} - <strong>{date.slice(-4)}</strong>
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out  ${
          isOpen ? " border border-t-0 max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-5 text-white border-l-1 border-r-1 border-b-1 border-white ">
          <p className="mb-2">{description}</p>
          <ul className="ps-5 text-white list-disc border-l-amber-50">
            {/* {link && (
              <li>
                <a
                  href={link}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {link}
                </a>
              </li>
            )} */}
            {url && (
              <li>
                <a
                  href={url}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {url}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AccordionProject = () => {
  const items = projects;

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          name={item.name}
          date={item.date}
          url={item.url}
          // link={item.link}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AccordionProject;
