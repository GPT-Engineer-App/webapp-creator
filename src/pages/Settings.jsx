import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Settings = () => {
  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Email Notifications</label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">SMS Notifications</label>
                <Switch />
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Privacy Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Profile Visibility</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Change Password</label>
                <Input type="password" className="w-full" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Two-Factor Authentication</label>
                <Switch />
              </div>
              <Button type="submit" className="bg-blue-500 text-white">Update</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;