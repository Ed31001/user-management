import { Navbar } from './components/organisms/Navbar';
import { UserGrid } from './components/organisms/UserGrid';
import { Input } from './components/atoms/Input';

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="p-4 w-60">
        <Input type="text" placeholder="Search users..." />
      </div>
      <UserGrid />
    </div>
  );
}
