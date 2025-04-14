import React, { useState } from 'react';
import LoginInput from '../atoms/LoginInput';
import PasswordInput from '../molecules/PasswordInput';
import { Button } from '../atoms/Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <LoginInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className='text-center'>
        <Button variant="login" type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
