import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/sonner";

const TransferFunds = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [recipientType, setRecipientType] = useState('');

  const onSubmit = data => {
    console.log(data);
    Toaster.success('Funds transferred successfully!');
  };

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Transfer Funds</h1>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Transfer Funds to Another User or Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700">Amount</label>
                <Input type="number" {...register("amount", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.amount && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700">Recipient Type</label>
                <Select onValueChange={(value) => setRecipientType(value)}>
                  <SelectTrigger className="w-full p-2 rounded-lg shadow-lg">
                    <SelectValue placeholder="Select recipient type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="account">Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-gray-700">Recipient Details</label>
                <Input type="text" {...register("recipientDetails", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.recipientDetails && <span className="text-red-500">This field is required</span>}
              </div>
              <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Transfer Funds</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TransferFunds;