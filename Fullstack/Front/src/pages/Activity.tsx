import React, { useState } from 'react';
import { ActivityCard } from '../components/ActivityCard';
import type { ActivityEntry } from '../types';

export const Activity: React.FC = () => {
  const [historyEntries] = useState<ActivityEntry[]>([
    {
      id: 1,
      personName: 'persona 1',
      timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
      action: 'entry'
    },
    {
      id: 2,
      personName: 'persona 2',
      timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
      action: 'entry'
    },
    {
      id: 3,
      personName: 'persona 3',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      action: 'exit'
    },
    {
      id: 4,
      personName: 'persona 4',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      action: 'entry'
    }
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Actividad</h1>
      </div>

      <div className="max-w-2xl">
        {historyEntries.map((entry) => (
          <ActivityCard key={entry.id} entry={entry} />
        ))}
        
        {historyEntries.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No hay entradas en el historial</p>
          </div>
        )}
      </div>
    </div>
  );
};