"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import {toast,Toaster} from "react-hot-toast"

export default function Logout() {
  const logout = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Logging you out")
    try {
      await signOut();
      toast.remove(id)
      toast.success("I will miss you 🥺")
    } catch (error) {
        toast.error("Failed to log you out")
    }
  };
  return (
    <form onSubmit={logout}>
      <Button type="submit" variant="outline">
        Logout
      </Button>
      <Toaster/>
    </form>
  );
}
