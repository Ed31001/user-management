import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const LoginInput: React.FC<InputProps> = ({ label, ...props }) => (
  <div>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <input
      {...props}
      className="w-full px-4 py-2 border rounded-md focus:outline-(--color-primary)"
    />
  </div>
);

export default LoginInput;
