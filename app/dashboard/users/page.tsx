export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Viewer',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      role: 'Editor',
      status: 'Active',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie@example.com',
      role: 'Viewer',
      status: 'Inactive',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <a
          href="/login"
          className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </a>
      </nav>

      <div className="flex">
        <aside className="w-48 bg-white h-screen shadow p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="block py-2 px-3 rounded hover:bg-gray-100 text-black"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="/dashboard/users"
                className="block py-2 px-3 rounded hover:bg-gray-100 text-black"
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="/dashboard/reports"
                className="block py-2 px-3 rounded hover:bg-gray-100 text-black"
              >
                Reports
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="block py-2 px-3 rounded hover:bg-gray-100 text-black"
              >
                Settings
              </a>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Users</h2>
          <div className="bg-white rounded shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-blue-50 text-black uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Role</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-3 text-black">{user.name}</td>
                    <td className="px-4 py-3 text-black">{user.email}</td>
                    <td className="px-4 py-3 text-blue-800">{user.role}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
