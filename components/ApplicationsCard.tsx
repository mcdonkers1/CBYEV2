
import React from 'react';

export default function ApplicationsCard() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="text-lg font-semibold mb-2">Recent Applications</div>
      <ul className="space-y-2 text-sm">
        <li>Microsoft - Software Engineer Intern <span className="text-xs bg-yellow-200 text-yellow-900 px-2 py-1 rounded">Interview</span></li>
        <li>Spotify - Product Design Intern <span className="text-xs">22/hr</span></li>
      </ul>
    </div>
  );
}
