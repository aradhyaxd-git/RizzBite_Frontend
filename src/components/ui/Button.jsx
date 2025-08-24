// File: src/components/ui/Button.jsx

export const Button = ({ children, className = '', variant = 'primary', size = 'default', onClick, ...props }) => {
    const baseStyles = 'font-semibold rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
    const variants = {
      primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
      outline: 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900',
    };

    const sizes = {
      default: 'px-5 py-2.5',
      sm: 'px-3 py-2 text-xs',
      lg: 'px-8 py-3 text-base',
      icon: 'p-2.5 w-10 h-10 flex items-center justify-center',
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };