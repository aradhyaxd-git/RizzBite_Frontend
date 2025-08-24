import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-purple-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;