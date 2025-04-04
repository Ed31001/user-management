import moonIcon from './assets/moon_icon.png'

const users = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', status: 'Active', dob: '1990-01-01' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', status: 'Locked', dob: '1985-05-15' },
  { id: 3, firstName: 'Edouard', lastName: 'Kreidy', email: 'edouard.kreidy@example.com', status: 'Active', dob: '2001-10-03' },
  { id: 4, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', status: 'Active', dob: '1995-02-10' },
  { id: 5, firstName: 'Bob', lastName: '', email: 'bob.martin@example.com', status: 'Locked', dob: '1980-08-05' },
  { id: 6, firstName: 'Charlie', lastName: 'Brown', email: 'charlie.brown@example.com', status: 'Active', dob: '1992-11-30' },
  { id: 7, firstName: 'David', lastName: 'Lee', email: 'david.lee@example.com', status: 'Locked', dob: '1987-07-14' },
  { id: 8, firstName: 'Eve', lastName: '', email: 'eve.green@example.com', status: 'Active', dob: '1993-09-21' },
  { id: 9, firstName: 'Frank', lastName: 'White', email: 'frank.white@example.com', status: 'Active', dob: '1994-01-25' },
  { id: 10, firstName: 'Grace', lastName: 'Black', email: 'grace.black@example.com', status: 'Locked', dob: '1985-03-17' }
];

export default function App() {
  return (
    <div className={`min-h-screen w-full`}>
      
      <nav className="bg-[#3251D0] text-white p-4 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">User Management</h1>
        <div className="space-x-3">
          <button className="bg-white text-[#3251D0] px-4 py-2 rounded">Create User</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
          <button className="px-2.5 py-2.5 rounded-full">
            <img src={moonIcon} alt="Toggle Theme" className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      <div className="p-4 w-60">
        <input type="text" placeholder="Search users..." className="p-2 border border-gray-300 rounded" />
      </div>

      <div className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {users.map(user => (
          <div key={user.id} className="card">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3251D0] text-2xl text-white font-bold">
              {user.firstName[0]}{user.lastName[0]}
            </div>
            <div className="w-full text-left">
              <h2 className="font-bold text-lg mt-2">{user.firstName} {user.lastName}</h2>
              <div className="text-gray-400">
                <p>Email: {user.email}</p>
                <p>Status: <span className={user.status === 'Active' ? 'text-[#3251D0]' : 'text-red-600'}>{user.status}</span></p>
                <p>Date of Birth: {user.dob}</p>
              </div>
            </div>
            <div className="mt-2 space-x-2 w-full text-right">
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
