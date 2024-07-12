import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const notifications = [
  { id: 1, message: 'Your profile has been updated.', read: false },
  { id: 2, message: 'New login from unknown device.', read: true },
  { id: 3, message: 'Password changed successfully.', read: false },
];

const Notifications = () => {
  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Your Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {notifications.map(notification => (
                <li key={notification.id} className="flex justify-between items-center py-2 border-b">
                  <span>{notification.message}</span>
                  <Switch checked={notification.read} />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Notifications;