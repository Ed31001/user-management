import moonIcon from '../../assets/moon_icon.png';
import sunIcon from '../../assets/sun_icon.png';
import { Button } from '../atoms/Button';
import { useThemeStore } from '../../store/useThemeStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const NavButtons = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTheme('light');
    document.documentElement.classList.remove('dark');
    navigate('/login');
  };

  const newUser = () => {
    navigate('/dashboard/new'); // Navigate to the new user creation page
  };

  return (
    <div className="space-x-3">
      <Button variant="primary" onClick={newUser}>Create User</Button>
      <Button variant="logout" onClick={handleLogout}>
        Logout
      </Button>
      <Button variant="icon" onClick={toggleTheme}>
        <img
          src={theme === 'light' ? moonIcon : sunIcon}
          alt="Toggle Theme"
          className="w-4 h-4"
        />
      </Button>
    </div>
  );
};