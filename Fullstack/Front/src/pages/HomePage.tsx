import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BarChart3, Users, Camera, Shield, TrendingUp, Activity } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      name: 'Dispositivos Activos',
      value: '12',
      change: '+2.1%',
      changeType: 'positive',
      icon: Camera,
      color: 'bg-blue-500'
    },
    {
      name: 'Usuarios Registrados',
      value: '48',
      change: '+5.4%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      name: 'Eventos Hoy',
      value: '127',
      change: '+12.5%',
      changeType: 'positive',
      icon: Activity,
      color: 'bg-purple-500'
    },
    {
      name: 'Alertas Activas',
      value: '3',
      change: '-1.2%',
      changeType: 'negative',
      icon: Shield,
      color: 'bg-orange-500'
    }
  ];

  const recentActivity = [
    { id: 1, user: 'Juan Pérez', action: 'Acceso autorizado', time: '2 min', type: 'success' },
    { id: 2, user: 'María García', action: 'Intento de acceso', time: '5 min', type: 'warning' },
    { id: 3, user: 'Carlos López', action: 'Salida registrada', time: '8 min', type: 'info' },
    { id: 4, user: 'Ana Martín', action: 'Acceso autorizado', time: '12 min', type: 'success' },
    { id: 5, user: 'Sistema', action: 'Cámara 3 desconectada', time: '15 min', type: 'error' }
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
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">vs mes anterior</span>
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
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' :
                      activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Acciones Rápidas</h2>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Camera className="h-5 w-5 mr-2" />
              Ver Cámaras
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Users className="h-5 w-5 mr-2" />
              Gestionar Usuarios
            </button>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Ver Reportes
            </button>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              Configuración
            </button>
          </div>
        </div>
      </div>

      {/* System Status */}
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
    </div>
  );
};