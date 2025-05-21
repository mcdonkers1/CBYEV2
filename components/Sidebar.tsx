
import React from 'react';
import { Home, Search, Bell } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-56 bg-[#f5f4e8] p-4">
      <div className="text-2xl font-bold mb-6">Feeve</div>
      <nav className="space-y-4">
        <div className="flex items-center space-x-2 text-green-800 font-semibold"><Home size={16} /> <span>Dashboard</span></div>
        <div className="flex items-center space-x-2 text-gray-600"><Search size={16} /> <span>Search</span></div>
        <div className="flex items-center space-x-2 text-gray-600"><Bell size={16} /> <span>Alerts</span></div>
      </nav>
    </aside>
  );
}
