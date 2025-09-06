"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import HowItWorks from "./HowItWorks";

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      console.log(res);
      if (res?.error) {
        console.error(res.error);
        toast.error("Login Failed");
        setIsLoading(false);
      } else {
        toast.success("Login successful");
        router.push("/");
      }
    } catch (error) {
      const err = error as Error;
      setIsLoading(false);
      console.error(error);
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="container">     

      <div className="contentContainer">
        <h1 className="heading">Sign In</h1>
        <h2 className="description">Sign in to manage the content</h2>

        {/* Sign In Form */}
        <div className="bg-muted/30 rounded-2xl p-8 border ">
          <form
            onSubmit={handleSubmit}
            method="post"
            className="w-full flex flex-col gap-6"
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email Address
              </Label>
              <Input
                required
                name="email"
                id="email"
                placeholder="Enter your email address"
                type="email"
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
              <Input
                required
                name="password"
                id="password"
                placeholder="Enter your password"
                type="password"
                className="h-12 text-base"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-12 text-base font-semibold mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center gap-3">
                  <LoaderCircle className="animate-spin h-5 w-5" />
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>

            <div className="flex justify-center pt-4">
              <HowItWorks />
            </div>
          </form>
        </div>

        <Toaster />
      </div>
    </div>
  );
}
