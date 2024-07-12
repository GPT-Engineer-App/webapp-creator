import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToaster } from "@/components/ui/sonner";

const AddFunds = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toaster = useToaster();
  const [paymentMethod, setPaymentMethod] = useState('');

  const onSubmit = data => {
    console.log(data);
    toaster.success('Funds added successfully!');
  };

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Add Funds</h1>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Add Funds to Your Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700">Amount</label>
                <Input type="number" {...register("amount", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.amount && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700">Payment Method</label>
                <Select onValueChange={(value) => setPaymentMethod(value)}>
                  <SelectTrigger className="w-full p-2 rounded-lg shadow-lg">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit-card">Credit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Add Funds</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AddFunds;