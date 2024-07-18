import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">PlataPay</Link>
          <div className="space-x-4">
            <Link to="/home">
              <Button variant="ghost">Home</Button>
            </Link>
            <Button variant="outline">Logout</Button>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto py-8">
        <Outlet />
      </main>
      
      <footer className="bg-blue-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2023 PlataPay. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;