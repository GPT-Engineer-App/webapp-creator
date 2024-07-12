import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "./sidebar";
import { Home as HomeIcon, Inbox, QrCode, Send, User } from "lucide-react";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center border-b bg-[#1e3a8a] px-4 lg:h-[60px] lg:px-6 shadow-lg shadow-blue-500/50">
          <MobileSidebar />
          <div className="w-full flex-1 flex justify-center items-center">
            <img 
              src="/images/header-logo.png" 
              alt="Header Logo" 
              className="h-auto w-full max-w-[200px] object-contain"
            />
          </div>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;