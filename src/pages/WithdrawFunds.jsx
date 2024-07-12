import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/sonner";

const WithdrawFunds = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [withdrawalMethod, setWithdrawalMethod] = useState('');

  const onSubmit = data => {
    console.log(data);
    Toaster.success('Withdrawal request submitted successfully!');
  };

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Withdraw Funds</h1>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Withdraw Funds from Your Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700">Amount</label>
                <Input type="number" {...register("amount", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.amount && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700">Withdrawal Method</label>
                <Select onValueChange={(value) => setWithdrawalMethod(value)}>
                  <SelectTrigger className="w-full p-2 rounded-lg shadow-lg">
                    <SelectValue placeholder="Select withdrawal method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank-account">Bank Account</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="crypto-wallet">Crypto Wallet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-gray-700">Account Details</label>
                <Input type="text" {...register("accountDetails", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.accountDetails && <span className="text-red-500">This field is required</span>}
              </div>
              <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Withdraw Funds</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default WithdrawFunds;