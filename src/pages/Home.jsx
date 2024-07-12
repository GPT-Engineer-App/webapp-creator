import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex justify-between items-center mt-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg">Balance</h2>
            <p className="text-3xl">$5,000</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">Send Money</button>
            <button className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">Request Money</button>
          </div>
        </div>
      </header>
      <main>
        <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <ul>
            <li className="flex justify-between py-2 border-b">
              <span>Transaction 1</span>
              <span>$100</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Transaction 2</span>
              <span>$200</span>
            </li>
            <li className="flex justify-between py-2 border-b">
              <span>Transaction 3</span>
              <span>$300</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;