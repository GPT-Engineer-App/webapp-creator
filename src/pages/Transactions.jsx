import React from 'react';

const Transactions = () => {
  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="flex space-x-4 mt-4">
          <input type="date" className="p-2 rounded-lg shadow-lg" />
          <select className="p-2 rounded-lg shadow-lg">
            <option value="">All Types</option>
            <option value="send">Send</option>
            <option value="receive">Receive</option>
          </select>
          <input type="number" placeholder="Amount" className="p-2 rounded-lg shadow-lg" />
        </div>
      </header>
      <main>
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

export default Transactions;