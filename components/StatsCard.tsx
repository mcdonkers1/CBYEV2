
import React from 'react';

export default function StatsCard() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="text-lg font-semibold mb-2">Application Stats</div>
      <ul>
        <li><strong>5</strong> Applications</li>
        <li><strong>1</strong> Interviews</li>
        <li><strong>2</strong> Offers</li>
      </ul>
    </div>
  );
}
