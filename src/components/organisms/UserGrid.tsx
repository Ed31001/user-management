import { useEffect, useState } from 'react';
import { UserCard } from '../molecules/UserCard';
import { User } from '../molecules/UserCard';
import { useAuthStore } from '../../store/useAuthStore';

export const UserGrid = ({ search }: { search: string }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const url = search
          ? `/api/users?search=${search}`
          : `/api/users`; // Fetch all users if no search query
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsers(data.result.data.users);
        }
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [search, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-4">
      {users.length === 0 ? (
        <div className="text-center text-gray-500">No Results</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};