import React, { useEffect, useState } from 'react';
import { ActivityCard } from '../components/ActivityCard';
import type { ActivityEntry } from '../types';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const API_URL_LOCAL = import.meta.env.VITE_API_URL_LOCAL;
const API_URL = import.meta.env.VITE_API_URL_DEPLOY;

export const Activity: React.FC = () => {
  const [historyEntries, setHistoryEntries] = useState<ActivityEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();
  const institutionID = user?.institutionID;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get(`${API_URL_LOCAL}/activity/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res.data;

        const formatted: ActivityEntry[] = data.map((activity: any) => ({
          id: activity.activity_ID,
          personName: `${activity.person.name} ${activity.person.surname}`, // ajustalo si solo tenés `name`
          timestamp: new Date(activity.dateTime_in),
          action: activity.dateTime_out ? 'exit' : 'entry', // o lo que tenga sentido en tu lógica
        }));

        setHistoryEntries(formatted);
      } catch (err) {
        console.error('Error fetching activity data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [institutionID]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Actividad</h1>
      </div>

      <div className="max-w-2xl">
        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : historyEntries.length > 0 ? (
          historyEntries.map((entry) => <ActivityCard key={entry.id} entry={entry} />)
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No hay entradas en el historial</p>
          </div>
        )}
      </div>
    </div>
  );
};