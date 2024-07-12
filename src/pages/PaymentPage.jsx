import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [screenshot, setScreenshot] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScreenshotUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setScreenshot(URL.createObjectURL(file));
      Toaster.success('Screenshot uploaded successfully!');
    }
  };

  const handlePaymentCompletion = () => {
    Toaster.success('Payment completed successfully!');
    navigate("/home");
  };

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Payment Page</h1>
      </header>
      <main>
        <iframe src={location.state.payUrl} title="Payment" className="w-full h-96 mb-4"></iframe>
        <div className="flex justify-between items-center mb-4">
          <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
          <Button onClick={() => setTimeLeft(180)} className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">Reset Timer</Button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload Screenshot</label>
          <Input type="file" accept="image/*" onChange={handleScreenshotUpload} className="w-full p-2 rounded-lg shadow-lg" />
        </div>
        {screenshot && (
          <div className="mb-4">
            <img src={screenshot} alt="Screenshot" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        )}
        <Button onClick={handlePaymentCompletion} className="bg-green-500 text-white p-2 rounded-lg shadow-lg">Complete Payment</Button>
      </main>
    </div>
  );
};

export default PaymentPage;