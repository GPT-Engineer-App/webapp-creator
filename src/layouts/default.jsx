import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "./sidebar";
import { Home as HomeIcon, Inbox, QrCode, Send, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-[#1e3a8a] px-4 md:px-6 justify-between shadow-lg shadow-blue-500/50">
        <MobileSidebar />
        <div className="flex-grow flex justify-center">
          <img src="/images/header-logo.png" alt="Header Logo" className="h-12" />
        </div>
        <Button variant="ghost" size="icon" className="text-white">
          <Bell className="h-6 w-6" />
        </Button>
      </header>
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow overflow-auto p-4">
          <Outlet />
        </main>
      </div>
      <footer className="sticky bottom-0 bg-[#1e3a8a] p-4 shadow-lg shadow-blue-500/50 shadow-white/50">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-white">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <Inbox className="h-6 w-6" />
            <span className="text-xs">Inbox</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <QrCode className="h-6 w-6" />
            <span className="text-xs">QR</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <Send className="h-6 w-6" />
            <span className="text-xs">Transactions</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <User className="h-6 w-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;