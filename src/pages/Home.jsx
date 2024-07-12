import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex justify-between items-center mt-4">
          <Card className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl">$5,000</p>
            </CardContent>
          </Card>
          <div className="flex space-x-4">
            <Button className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">Send Money</Button>
            <Button className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">Request Money</Button>
          </div>
        </div>
      </header>
      <main>
        <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardContent>
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
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;