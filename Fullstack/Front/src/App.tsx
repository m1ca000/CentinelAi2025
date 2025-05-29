import React from 'react';
import { Sidebar } from './components/Sidebar';
import { DeviceControl } from './components/DeviceControl';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <DeviceControl />
      </div>
    </div>
  );
}

export default App;