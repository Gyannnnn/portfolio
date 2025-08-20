"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("passwrod");

    console.log("Email" + email, "Password : " + password);

    try {
      setIsLoading(true);
      await axios.post(
        "https://portfolio-be-flame.vercel.app/api/v1/auth/signin",
        {
          userEmail: email,
          userPassword: password,
        }
      );
      toast.success("Successfully signedin");
      router.push("/");
    } catch (error) {
      toast.error("Failed to sign in try again");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Signin</h1>
        <h1 className="description">Signin to manage the content</h1>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="w-full h-full flex flex-col gap-4 pt-10"
        >
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              required
              name="email"
              id="email"
              placeholder="Enter email"
              type="email"
            ></Input>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              required
              name="password"
              id="passowrd"
              placeholder="Enter password"
              type="password"
            ></Input>
          </div>
          <Button type="submit">
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <LoaderCircle className="animate-spin" /> <h1>Signing in</h1>
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          <Toaster />
        </form>
      </div>
    </div>
  );
}
