"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeComponent from "./CodeComponent";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";

const code = `
const contactDetails = {
  name: "Gyanranjan Patra",
  email: "hi.gyanaranjanpatra@gmail.com",
  mobile: "7978648082",
  location: "Keonjar, Odisha",
  linkedIn: "linkedin.com/in/higyan",
  github: "github.com/gyannnnn",
};

function reachOut() {
  console.log(\`Reach out to me via email at \${contactDetails.email} or connect on LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`;

export default function ContactFormTab() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  console.log(errorMsg);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const id = toast.loading("Sending your message...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.remove(id);
        setStatus("sent");
        toast.success(" Message sent successfully!");
        form.reset();
      } else {
        const { error } = await res.json();
        toast.remove(id);
        setStatus("error");
        setErrorMsg(error || "Something went wrong.");
        toast.error(" Failed to send message");
      }
    } catch (err) {
      toast.remove(id);
      setStatus("error");
      setErrorMsg("Unexpected error. Try again later.");
      toast.error(" Unexpected error");
    }
  }
  return (
    <div className="flex w-full max-w-sm flex-col  gap-6 ">
      <Tabs className="sm:w-1/2" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Form</TabsTrigger>
          <TabsTrigger value="password">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="account" >
          <form onSubmit={onSubmit} >
            <div className="bg-transparent sm:w-[75vw] pt-10 w-full">
              <CardContent className="grid gap-6 w-full ">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input
                    name="name"
                    required
                    id="tabs-demo-name"
                    placeholder="Your name, your fame"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-email">Email</Label>
                  <Input
                    required
                    name="email"
                    type="email"
                    id="tabs-demo-email"
                    placeholder="where i can reach you back ?"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-message">Message</Label>
                  <Textarea
                    name="message"
                    required
                    id="tabs-demo-message"
                    className="w-full border rounded-md p-3 min-h-[120px]"
                    placeholder="Your words, my inbox"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full mt-4">
                  {status === "sending" ? "Sending..." : "Submit"}
                </Button>
              </CardFooter>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="password">
          <div className="sm:w-[75vw] w-[90vw]  bg-transparent pt-10">
            <h1>contactDetails.ts</h1>
            <CodeComponent code={code} />
          </div>
        </TabsContent>
        <Toaster position="top-center" />
      </Tabs>
    </div>
  );
}
