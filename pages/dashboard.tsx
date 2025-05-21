
import React from 'react';
import Sidebar from '../components/Sidebar';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import ApplicationsCard from '../components/ApplicationsCard';
import RecommendationsCard from '../components/RecommendationsCard';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#fdfcf4] text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-scroll space-y-6">
        <div className="text-xl font-semibold">Internship Overview</div>
        <OverviewChart />
        <div className="grid grid-cols-3 gap-4">
          <StatsCard />
          <ApplicationsCard />
          <RecommendationsCard />
        </div>
      </main>
    </div>
  );
}
