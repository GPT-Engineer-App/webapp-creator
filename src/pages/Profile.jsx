import React from 'react';

const Profile = () => {
  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="flex items-center mt-4">
          <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover w-24 h-24 rounded-full shadow-lg" />
          <div className="ml-4">
            <h2 className="text-xl">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </header>
      <main>
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 rounded-lg shadow-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 rounded-lg shadow-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input type="tel" className="w-full p-2 rounded-lg shadow-lg" />
            </div>
          </form>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full p-2 rounded-lg shadow-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Two-Factor Authentication</label>
              <input type="checkbox" className="p-2 rounded-lg shadow-lg" />
            </div>
          </form>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Linked Accounts</h2>
          <ul>
            <li className="flex justify-between py-2 border-b">
              <span>Bank Account</span>
              <button className="bg-red-500 text-white p-2 rounded-lg shadow-lg">Unlink</button>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>PayPal</span>
              <button className="bg-red-500 text-white p-2 rounded-lg shadow-lg">Unlink</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Profile;