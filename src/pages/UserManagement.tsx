import { Navbar } from '../components/organisms/Navbar';
import { Input } from '../components/atoms/Input';
import { UserGrid } from '../components/organisms/UserGrid';

const UserManagement = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="p-4 w-60">
        <Input type="text" placeholder="Search users..." />
      </div>
      <UserGrid />
    </div>
  );
};

export default UserManagement;
