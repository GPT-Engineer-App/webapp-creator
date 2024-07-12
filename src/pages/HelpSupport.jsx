import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const faqs = [
  { question: "How do I reset my password?", answer: "To reset your password, go to the settings page and click on 'Reset Password'." },
  { question: "How do I contact support?", answer: "You can contact support by filling out the form below or emailing support@example.com." },
  { question: "Where can I find the user manual?", answer: "The user manual is available in the 'Help' section of the app." },
];

const troubleshootingGuides = [
  { issue: "App not loading", solution: "Try restarting the app or checking your internet connection." },
  { issue: "Unable to login", solution: "Ensure your credentials are correct or reset your password." },
  { issue: "Payment failed", solution: "Check your payment details and try again or contact support." },
];

const HelpSupport = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Support request submitted successfully!');
  };

  return (
    <div className="p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Help & Support</h1>
      </header>
      <main>
        <section className="mb-8">
          <Card className="bg-white p-4 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Frequently Asked Questions (FAQs)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {faqs.map((faq, index) => (
                  <li key={index}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
        <section className="mb-8">
          <Card className="bg-white p-4 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Contact Support</CardTitle>
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
                  <label className="block text-gray-700">Subject</label>
                  <Input type="text" {...register("subject", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                  {errors.subject && <span className="text-red-500">This field is required</span>}
                </div>
                <div>
                  <label className="block text-gray-700">Message</label>
                  <Textarea {...register("message", { required: true })} className="w-full p-2 rounded-lg shadow-lg" />
                  {errors.message && <span className="text-red-500">This field is required</span>}
                </div>
                <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card className="bg-white p-4 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Troubleshooting Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {troubleshootingGuides.map((guide, index) => (
                  <li key={index}>
                    <strong>{guide.issue}</strong>
                    <p>{guide.solution}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default HelpSupport;