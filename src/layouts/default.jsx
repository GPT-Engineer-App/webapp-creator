import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "./sidebar";
import { Home as HomeIcon, Inbox, QrCode, Send, User, Bell, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'white' : 'default');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between shadow-lg">
        <MobileSidebar />
        <div className="flex-grow flex justify-center">
          <img src="/images/app-logo.png" alt="App Logo" className="h-12" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'default' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow overflow-auto p-4">
          <Outlet />
        </main>
      </div>
      <footer className="sticky bottom-0 bg-background p-4 shadow-lg">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Inbox className="h-6 w-6" />
            <span className="text-xs">Inbox</span>
          </button>
          <button className="flex flex-col items-center">
            <QrCode className="h-6 w-6" />
            <span className="text-xs">QR</span>
          </button>
          <button className="flex flex-col items-center">
            <Send className="h-6 w-6" />
            <span className="text-xs">Transactions</span>
          </button>
          <button className="flex flex-col items-center">
            <User className="h-6 w-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;