'use client';

import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </nav>

      <div className="flex">
        {/* Sidebar */}
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

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Overview</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded shadow p-4">
              <p className="text-blue-500 text-sm">Total Clients</p>
              <p className="text-3xl font-bold text-blue-300">1,240</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <p className="text-blue-500 text-sm">Active Sessions</p>
              <p className="text-3xl font-bold text-blue-300">48</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <p className="text-blue-500 text-sm">Reports Generated</p>
              <p className="text-3xl font-bold text-blue-300">320</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
