'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

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
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Settings</h2>

          {saved && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-sm">
              Settings saved successfully!
            </div>
          )}

          <div className="bg-white rounded shadow p-6 max-w-lg">
            <div className="mb-4">
              <label className="block text-black text-sm font-medium mb-1">
                Site Name
              </label>
              <input
                type="text"
                defaultValue="Admin Portal"
                className="w-full border rounded px-3 py-2 text-sm text-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-medium mb-1">
                Admin Email
              </label>
              <input
                type="email"
                defaultValue="admin@example.com"
                className="w-full border rounded px-3 py-2 text-sm text-blue-300"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm font-medium mb-1">
                Timezone
              </label>
              <select className="w-full border rounded px-3 py-2 text-sm text-blue-300">
                <option>UTC</option>
                <option>Africa/Lagos</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
              </select>
            </div>

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Save Settings
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
