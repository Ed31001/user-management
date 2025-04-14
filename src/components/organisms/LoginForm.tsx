import React, { useState } from 'react';
import LoginInput from '../atoms/LoginInput';
import PasswordInput from '../molecules/PasswordInput';
import { Button } from '../atoms/Button';
import { login } from '../../services/authService';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();   
    setError('');
    if (!email || !password) {
        setError('Email and password are required');
        return;
      }
    setLoading(true);
    try {
      const res = await login(email, password);
      const { accessToken, expiresIn } = res.result.data;
      setAuth(accessToken, expiresIn);
      navigate('/dashboard');
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            setError('Invalid email or password');
          } else {
            setError(err.response?.data?.message || 'Login failed');
          }
        } else {
          setError('Login failed');
        }
    }
    setLoading(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm text-center">{error}</div>}
      
      <LoginInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="text-center">
        <Button variant="login" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
