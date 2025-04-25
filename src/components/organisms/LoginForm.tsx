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
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
        const response = await axios.post('/api/login', { email, password });
        if(response.data.status == 200){
          const res = await login(email, password);
          const { accessToken, expiresIn } = res.result.data;
          setAuth(accessToken, expiresIn);
          navigate('/dashboard');
       }
    } catch (err: unknown) {
      console.log('Error caught in catch block:', err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Invalid credentials.');
        } else {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

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