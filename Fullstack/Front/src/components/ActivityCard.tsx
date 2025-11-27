import React from 'react';
import { Clock } from 'lucide-react';
import type { ActivityEntry } from '../types';

interface HistoryCardProps {
  entry: ActivityEntry;
}

export const ActivityCard: React.FC<HistoryCardProps> = ({ entry }) => {
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Ahora';
    if (diffInMinutes < 60) return `${diffInMinutes} mins`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} h`;
    return `${Math.floor(diffInMinutes / 1440)} días`;
  };

  return (
    <div className="bg-gray-200 rounded-lg p-4 mb-3">
      <div className="flex justify-between items-center mb-3">
        <div className="font-medium text-gray-800">{entry.personName}</div>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock size={16} className="mr-1" />
          {formatTimeAgo(entry.timestamp)}
        </div>
      </div>
    </div>
  );
};