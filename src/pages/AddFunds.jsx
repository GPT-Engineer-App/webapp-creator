import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/sonner";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Modal from "@/components/ui/modal";
import { useNavigate } from "react-router-dom";

const AddFunds = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  const addFundsMutation = useMutation(
    async (data) => {
      const response = await axios.post('https://api.nexuspay.cloud/payin/process', {
        name: "Marc",
        email: "admin@tmapp.live",
        amount: data.amount,
        pay_method: data.paymentMethod,
        mobilenumber: "09182156660",
        address: "Batangas ph",
        webhook: "https://hooks.zapier.com/hooks/catch/16946926/3n5n63d",
        remarks: `Marc deposit request on ${new Date().toLocaleString()}`
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer W6Bqqa2nhGmcWKFg5trryaaQjtOspejlo33Oep4='
        }
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        setModalData(data);
      },
      onError: (error) => {
        Toaster.error('Failed to add funds. Please try again.');
      }
    }
  );

  const onSubmit = (data) => {
    if (data.paymentMethod !== 'sp-qrph') {
      Toaster.error('Payment method not yet available.');
      return;
    }
    addFundsMutation.mutate(data);
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
                    <SelectItem value="sp-qrph">QRPH</SelectItem>
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
      {modalData && (
        <Modal isOpen={!!modalData} onClose={() => setModalData(null)}>
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Payment Information</h2>
            <p>Amount: {modalData.amount}</p>
            <p>Payment Method: {modalData.pay_method}</p>
            <Button onClick={() => navigate("/payment-page", { state: { payUrl: modalData.pay_url } })} className="bg-green-500 text-white p-2 rounded-lg shadow-lg">Pay Now</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddFunds;