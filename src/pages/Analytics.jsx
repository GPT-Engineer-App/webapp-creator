import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
  const transactions = [
    { id: 1, name: 'Deposit to LazyCat Casino', date: '2023-10-01', type: 'send', amount: -1000 },
    { id: 2, name: 'Withdrawal from LazyCat Casino', date: '2023-10-02', type: 'receive', amount: 2500 },
    { id: 3, name: 'Deposit to Wallet', date: '2023-10-03', type: 'receive', amount: 5000 },
  ];

  const chartData = transactions.map(transaction => ({
    name: transaction.date,
    amount: transaction.amount,
  }));

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Analytics</h1>
      </header>
      <main>
        <section className="mb-8">
          <Card className="bg-white p-4 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Transaction Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Analytics;