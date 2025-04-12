import moonIcon from '../../assets/moon_icon.png';
import { Button } from '../atoms/Button';

export const NavButtons = () => (
  <div className="space-x-3">
    <Button>Create User</Button>
    <Button variant="logout">Logout</Button>
    <Button variant="icon">
      <img src={moonIcon} alt="Toggle Theme" className="w-3.5 h-3.5" />
    </Button>
  </div>
);
