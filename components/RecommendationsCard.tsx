
import React from 'react';

export default function RecommendationsCard() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="text-lg font-semibold mb-2">Recommendations</div>
      <ul className="space-y-2 text-sm">
        <li>Google - Product Design Intern <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">Applied</span></li>
        <li>Spotify - Product Design Intern <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">Applied</span></li>
      </ul>
    </div>
  );
}
