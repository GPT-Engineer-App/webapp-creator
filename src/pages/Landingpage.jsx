import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ThreeDAnimation from "@/components/ThreeDAnimation";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-primary-dark">
      <header className="py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to PlataPay</h1>
          <p className="text-xl text-white">Your Trusted Payment Solution in the Philippines</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="w-full max-w-4xl mx-auto bg-transparent">
            <ThreeDAnimation />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Features</h2>
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
            className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </section>
      </main>

      <footer className="bg-primary-dark py-4">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2023 PlataPay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <Card className="bg-white bg-opacity-10 border-none shadow-lg">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </CardContent>
  </Card>
);

export default Index;