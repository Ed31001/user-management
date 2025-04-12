import { UserCard } from '../molecules/UserCard';
import { users } from '../../data/users';

export const UserGrid = () => (
  <div className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
    {users.map(user => <UserCard key={user.id} user={user} />)}
  </div>
);
