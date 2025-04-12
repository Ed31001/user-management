import { NavButtons } from '../molecules/NavButtons';

export const Navbar = () => (
  <nav className="bg-(--color-primary) text-white p-4 flex justify-between items-center w-full">
    <h1 className="text-xl font-bold">User Management</h1>
    <NavButtons />
  </nav>
);
