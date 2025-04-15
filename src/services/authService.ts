import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    console.log('Login response:', response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login error:', error.response?.data || error.message);
      throw error; // Re-throw the error to be caught in the LoginForm
    }
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};