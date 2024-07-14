import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex flex-col justify-center items-center text-white">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to PlataPay</h1>
        <p className="text-xl">Your Trusted Payment Solution in the Philippines</p>
      </header>
      
      <main className="text-center mb-12">
        <p className="text-lg mb-6">
          Experience fast, secure, and convenient payments with PlataPay.
        </p>
        <Link to="/home">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
            Get Started
          </Button>
        </Link>
      </main>
      
      <footer className="text-sm">
        &copy; 2023 PlataPay. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;