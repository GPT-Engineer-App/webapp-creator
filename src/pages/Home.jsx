import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Inbox, QrCode, Transactions, User } from "lucide-react";

const Home = () => {
  const transactions = [
    { id: 1, name: 'Deposit to LazyCat Casino', date: '2023-10-01', type: 'send', amount: -1000 },
    { id: 2, name: 'Withdrawal from LazyCat Casino', date: '2023-10-02', type: 'receive', amount: 2500 },
    { id: 3, name: 'Deposit to Wallet', date: '2023-10-03', type: 'receive', amount: 5000 },
  ];

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Card className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Your Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl">₱10,500.00</p>
            <div className="flex justify-around mt-4">
              <Button className="bg-purple-800 text-white p-2 rounded-lg shadow-lg w-1/4">Deposit</Button>
              <Button className="bg-green-500 text-white p-2 rounded-lg shadow-lg w-1/4">Withdraw</Button>
              <Button className="bg-black text-white p-2 rounded-lg shadow-lg w-1/4">Transfer</Button>
            </div>
          </CardContent>
        </Card>
      </header>
      <main>
        <section className="mb-8">
          <Card className="bg-white p-4 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between py-2 border-b">
                  <span>Deposit to LazyCat Casino</span>
                  <span className="text-red-500">-₱1,000.00</span>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <span>Withdrawal from LazyCat Casino</span>
                  <span className="text-green-500">+₱2,500.00</span>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <span>Deposit to Wallet</span>
                  <span className="text-green-500">+₱5,000.00</span>
                </li>
              </ul>
              <Button className="bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4">View All Transactions</Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="sticky bottom-0 bg-white p-4 shadow-lg">
        <div className="flex justify-around">
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Inbox className="h-6 w-6" />
            <span className="text-xs">Inbox</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <QrCode className="h-6 w-6" />
            <span className="text-xs">QR</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Transactions className="h-6 w-6" />
            <span className="text-xs">Transactions</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <User className="h-6 w-6" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Home;