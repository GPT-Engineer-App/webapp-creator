import React from 'react';

const Settings = () => {
  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <main>
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-lg font-semibold mb-2">Notification Preferences</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email Notifications</label>
              <input type="checkbox" className="p-2 rounded-lg shadow-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">SMS Notifications</label>
              <input type="checkbox" className="p-2 rounded-lg shadow-lg" />
            </div>
          </form>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-lg font-semibold mb-2">Privacy Settings</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Profile Visibility</label>
              <select className="w-full p-2 rounded-lg shadow-lg">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </form>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">App Version</h2>
          <p>1.0.0</p>
        </div>
      </main>
    </div>
  );
};

export default Settings;