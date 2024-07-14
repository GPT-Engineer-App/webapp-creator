import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ThreeDAnimation from "@/components/ThreeDAnimation";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-100 to-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Welcome to PlataPay</h1>
        <p className="text-xl text-gray-600">Your Trusted Payment Solution in the Philippines</p>
      </header>

      <div className="w-full max-w-4xl mb-12">
        <ThreeDAnimation />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-blue-700">Fast Transactions</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Process payments quickly and securely with our state-of-the-art technology.
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-blue-700">Multiple Payment Options</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Accept various payment methods including credit cards, e-wallets, and bank transfers.
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-blue-700">24/7 Support</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            Our dedicated team is always ready to assist you with any inquiries or issues.
          </CardContent>
        </Card>
      </div>

      <Button 
        onClick={() => navigate("/home")} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Started
      </Button>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2023 PlataPay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;