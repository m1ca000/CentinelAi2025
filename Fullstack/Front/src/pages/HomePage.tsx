import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BarChart3, Users, Camera, Shield, TrendingUp, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_URL_LOCAL = import.meta.env.VITE_API_URL_LOCAL;
const API_URL = import.meta.env.VITE_API_URL_DEPLOY;

export const HomePage: React.FC = () => {
  const { user, token } = useAuth();
  const [activeDevices, setActiveDevices] = React.useState<any[]>([]);
  const [todayActivities, setTodayActivities] = React.useState<any[]>([]);
  const [persons, setPersons] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const institutionID = user?.institutionID;
  const navigate = useNavigate();
  
  React.useEffect(() => {
  const fetchHomeData = async () => {
    try { 
      // Dispositivos activos
      const devicesRes = await fetch(`${API_URL}/devices/active`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const devicesData = await devicesRes.json();
      setActiveDevices(devicesData);

      // Actividad del día
      const activityRes = await fetch(`${API_URL}/activity/day`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const activityData = await activityRes.json();
      setTodayActivities(activityData);

      const personRes = await fetch(`${API_URL}/person/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const personData = await personRes.json();
      setPersons(personData);

    } catch (err) {
      console.error('Error cargando datos de home:', err);
    } finally {
      setLoading(false);
    }
  };

    fetchHomeData();
  }, [institutionID]);

  if (loading) {
    return <p className="text-center mt-10">Cargando datos...</p>;
  }

  const stats = [
    {
      name: 'Dispositivos Activos',
      value: activeDevices.length,
      changeType: 'positive',
      icon: Camera,
      color: 'bg-blue-500'
    },
    {
      name: 'Usuarios Registrados',
      value: persons.length,
      changeType: 'positive',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      name: 'Ingresos Hoy',
      value: todayActivities.length,
      changeType: 'positive',
      icon: Activity,
      color: 'bg-purple-500'
    },
    {
      name: 'Alertas Activas',
      value: 0,
      changeType: 'negative',
      icon: Shield,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ¡Bienvenido, {user?.name}!
        </h1>
        <p className="text-gray-600">
          Aquí tienes un resumen de la actividad de tu sistema de seguridad
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Actividad Reciente</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {todayActivities.length === 0 ? (
                <p className="text-gray-500 text-sm">No hay actividad registrada hoy</p>
              ) : (
                todayActivities.map((activity: any) => (
                  <div key={activity.activity_ID} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-3 bg-green-500"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {activity.person?.name} {activity.person?.surname}
                        </p>
                        <p className="text-sm text-gray-600">
                          Ingreso registrado
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(activity.dateTime_in).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Acciones Rápidas</h2>
        </div>
        <div className="p-6 space-y-4">
          <button
            onClick={() => navigate('/dashboard/devices')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Camera className="h-5 w-5 mr-2" />
            Ver Cámaras
          </button>

          <button
            onClick={() => navigate('/dashboard/users')}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Users className="h-5 w-5 mr-2" />
            Gestionar Usuarios
          </button>

          <button
            onClick={() => navigate('/dashboard/activity')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <BarChart3 className="h-5 w-5 mr-2" />
            Ver Actividad
          </button>

          <button
            onClick={() => navigate('')}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Shield className="h-5 w-5 mr-2" />
            Configuración
          </button>
        </div>
      </div>
      </div>
      {/*
      System Status
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Estado del Sistema</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Cámaras</h3>
              <p className="text-sm text-gray-600 mt-1">10 de 12 activas</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Molinetes</h3>
              <p className="text-sm text-gray-600 mt-1">2 de 2 activos</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Rendimiento</h3>
              <p className="text-sm text-gray-600 mt-1">Excelente</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};