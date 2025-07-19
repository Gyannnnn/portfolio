"use client";

import { signIn, useSession } from "next-auth/react"; // <-- Use from next-auth/react in client components
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false)
  const [jwt,setJwt] = useState("")
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    

    if (res?.ok) {
      setLoading(true)
      router.push("/"); // redirect on success
    } else {
      setLoading(false)
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Signin</h1>
        <p>Token: {session?.accessToken}</p>
        <p className="description">Sign in to manage the contents</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:w-1/2 w-full"
        >
          <label>
            Email
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">{loading?"Signing ..." : "Signin"}</Button>
        </form>
      </div>
    </div>
  );
}
