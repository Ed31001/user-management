import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';

export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  status: string;
  dateOfBirth: string;
};

export const UserCard = ({ user }: { user: User }) => {
  const initials = `${user.firstName[0]}${user.lastName?.[0] || ''}`;
  return (
    <div className="card"style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
    }}>
      <Avatar initials={initials} />
      <div className="w-full text-left">
        <h2 className="font-bold text-lg mt-2">{user.firstName} {user.lastName || ''}</h2>
        <div className="text-gray-400">
          <p>Email: {user.email}</p>
          <p>Status: <span className={user.status}>{user.status}</span></p>
          <p>Date of Birth: {user.dateOfBirth}</p>
        </div>
      </div>
      <div className="mt-2 space-x-2 w-full text-right">
        <Button variant="edit">Edit</Button>
        <Button variant="delete">Delete</Button>
      </div>
    </div>
  );
};
