import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Transactions = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');

  const transactions = [
    { id: 1, name: 'Transaction 1', date: '2023-10-01', type: 'send', amount: 100 },
    { id: 2, name: 'Transaction 2', date: '2023-10-02', type: 'receive', amount: 200 },
    { id: 3, name: 'Transaction 3', date: '2023-10-03', type: 'send', amount: 300 },
  ];

  const filteredTransactions = transactions.filter(transaction => {
    return (
      (!search || transaction.name.toLowerCase().includes(search.toLowerCase())) &&
      (!date || transaction.date === date) &&
      (!type || transaction.type === type) &&
      (!amount || transaction.amount === Number(amount))
    );
  });

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="flex space-x-4 mt-4">
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 rounded-lg shadow-lg" />
          <Select onValueChange={(value) => setType(value)}>
            <SelectTrigger className="p-2 rounded-lg shadow-lg">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="send">Send</SelectItem>
              <SelectItem value="receive">Receive</SelectItem>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 rounded-lg shadow-lg" />
          <Input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 rounded-lg shadow-lg" />
        </div>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardContent>
            <ul>
              {filteredTransactions.map(transaction => (
                <li key={transaction.id} className="flex justify-between py-2 border-b">
                  <span>{transaction.name}</span>
                  <span>{transaction.date}</span>
                  <span>{transaction.type}</span>
                  <span>${transaction.amount}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Transactions;