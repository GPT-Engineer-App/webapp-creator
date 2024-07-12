import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Profile</h1>
      </header>
      <main>
        <Card className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <Input type="text" {...register("name", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <Input type="email" {...register("email", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <Input type="tel" {...register("phone", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                {errors.phone && <span className="text-red-500">This field is required</span>}
              </div>
              <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Save</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Password</label>
                <Input type="password" className="w-full p-2 rounded-lg shadow-lg" />
              </div>
              <div>
                <label className="block text-gray-700">Two-Factor Authentication</label>
                <Input type="checkbox" className="p-2 rounded-lg shadow-lg" />
              </div>
              <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Update</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white p-4 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Linked Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="flex justify-between py-2 border-b">
                <span>Bank Account</span>
                <Button className="bg-red-500 text-white p-2 rounded-lg shadow-lg">Unlink</Button>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>PayPal</span>
                <Button className="bg-red-500 text-white p-2 rounded-lg shadow-lg">Unlink</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;