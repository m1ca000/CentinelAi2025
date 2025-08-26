import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Building, MapPin, Phone, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const InstitutionSetupPage: React.FC = () => {
  const [institutionName, setInstitutionName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState<'office' | 'school' | 'hospital' | 'factory' | 'other'>('office');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { createInstitution, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!institutionName.trim() || !address.trim() || !phone.trim()) {
      setError('Todos los campos son obligatorios');
      setIsLoading(false);
      return;
    }

    try {
      const success = await createInstitution({
        name: institutionName,
        address,
        phone,
        type
      });
      
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Error al crear la institución. Intenta nuevamente.');
      }
    } catch (err) {
      setError('Error al crear la institución. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const institutionTypes = [
    { value: 'office', label: 'Oficina' },
    { value: 'school', label: 'Escuela/Universidad' },
    { value: 'hospital', label: 'Hospital/Clínica' },
    { value: 'factory', label: 'Fábrica/Industria' },
    { value: 'other', label: 'Otro' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center mb-6">
            <Shield className="h-12 w-12 text-indigo-600 mr-3" />
            <span className="text-3xl font-bold text-gray-900">Centinelai</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Configura tu Institución
          </h2>
          <p className="text-gray-600">
            ¡Hola {user?.name}! Para completar tu registro, necesitamos algunos datos de tu institución.
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-xl border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="inline h-4 w-4 mr-1" />
                Nombre de la Institución
              </label>
              <input
                id="institutionName"
                name="institutionName"
                type="text"
                required
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Ej: Mi Empresa S.A."
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Institución
              </label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                {institutionTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Dirección
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Calle, número, ciudad"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline h-4 w-4 mr-1" />
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="+54 11 1234-5678"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm">
              <strong>Nota:</strong> Esta información se utilizará para configurar tu sistema de seguridad y generar reportes.
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Crear Institución'
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Al crear tu institución, podrás acceder a todas las funcionalidades de Centinelai
          </p>
        </div>
      </div>
    </div>
  );
};