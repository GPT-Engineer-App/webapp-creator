import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ThreeDAnimation from "@/components/ThreeDAnimation";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Welcome to the E-Wallet App</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center">Use the navigation menu to explore the app.</p>
          <Button onClick={() => navigate("/home")}>Go to Dashboard</Button>
        </CardContent>
      </Card>
      <ThreeDAnimation />
    </div>
  );
};

export default Index;