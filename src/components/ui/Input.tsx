import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  fullWidth = false,
  className = '', 
  id,
  ...props 
}) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  const baseStyles = 'rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent';
  const errorStyles = error ? 'border-red-300 focus:ring-red-500' : '';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedStyles = `${baseStyles} ${errorStyles} ${widthStyles} ${className}`;

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input 
        id={inputId}
        className={combinedStyles} 
        {...props} 
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;