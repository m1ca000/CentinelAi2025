import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DeviceControl } from './pages/DeviceControl';
import { Activity } from './pages/Activity';
import { Users } from './pages/Users';

type ActiveView = 'devices' | 'activity' | 'users' | 'home';

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('devices');

  const renderContent = () => {
    switch (activeView) {
      case 'devices':
        return <DeviceControl />;
      case 'activity':
        return <Activity />;
      case 'users':
        return <Users />;
      case 'home':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">Home</h1>
            <p className="text-gray-600 mt-4">Página principal en desarrollo</p>
          </div>
        );
      default:
        return <DeviceControl />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;