import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ThreeDAnimation from "@/components/ThreeDAnimation";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to PlataPay</h1>
          <p className="text-xl">Your Trusted Payment Solution in the Philippines</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="w-full max-w-4xl mx-auto">
            <ThreeDAnimation />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Fast Transactions"
              description="Process payments quickly and securely with our state-of-the-art technology."
            />
            <FeatureCard
              title="Multiple Payment Options"
              description="Accept various payment methods including credit cards, e-wallets, and bank transfers."
            />
            <FeatureCard
              title="24/7 Support"
              description="Our dedicated team is always ready to assist you with any inquiries or issues."
            />
          </div>
        </section>

        <section className="text-center">
          <Button 
            onClick={() => navigate("/home")} 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 PlataPay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <Card className="bg-white shadow-lg">
    <CardHeader>
      <CardTitle className="text-center text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      {description}
    </CardContent>
  </Card>
);

export default Index;