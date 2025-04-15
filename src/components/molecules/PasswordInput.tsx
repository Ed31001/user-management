import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import passwordIcon from '../../assets/password_icon.png'

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className="input pr-10"
        />
        <Button
          variant="password"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img src={passwordIcon} className="w-4.5 h-3" />
        </Button>
      </div>
    </div>
  );
};

export default PasswordInput;
