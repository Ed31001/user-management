import axios from 'axios';

export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  status: string;
  dateOfBirth: string;
};

export type UsersResponse = {
  result: { // Add the `result` property
    data: {
      users: User[];
    };
    message: string;
  };
  status: number;
};

export const getUsers = async (token: string, search: string = ''): Promise<UsersResponse> => {
  const url = search ? `/api/users?search=${search}` : `/api/users`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};