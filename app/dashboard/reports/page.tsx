export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: 'Monthly Revenue',
      date: '2026-06-01',
      status: 'Completed',
    },
    { id: 2, title: 'User Growth', date: '2026-06-05', status: 'Completed' },
    { id: 3, title: 'Traffic Analysis', date: '2026-06-10', status: 'Pending' },
    { id: 4, title: 'Sales Summary', date: '2026-06-15', status: 'Completed' },
    { id: 5, title: 'Error Logs', date: '2026-06-20', status: 'Pending' },
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
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Reports</h2>
          <div className="bg-white rounded shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-blue-50 text-black uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 text-left">Title</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td className="px-4 py-3 text-black">{report.title}</td>
                    <td className="px-4 py-3 text-black">{report.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          report.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {report.status}
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
