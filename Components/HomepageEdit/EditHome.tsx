"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditIcon, Loader } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function EditHome({
  userId,
  token,
  role,
}: {
  userId: string;
  token: string;
  role: string;
}) {
  const [IsLoading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const userHeading = formData.get("heading");
    const userBio = formData.get("bio");
    const userResumeLink = formData.get("resume");
    const userEmail = formData.get("email");
    const userGithubId = formData.get("github");

    const loadingId = toast.loading("Editing");
    setLoading(true);
    try {
      console.log(
        userId,
        userHeading,
        userBio,
        userResumeLink,
        userEmail,
        userGithubId
      );
      const res = await axios.put(
        "http://localhost:8000/api/v1/intro/update",
        {
          userHeading,
          userBio,
          userResumeLink,
          userEmail,
          userGithubId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast.remove(loadingId);
      toast.success("Updated Successfully");
      setLoading(false)
    
    } catch (error) {
      setLoading(false);
      toast.remove(loadingId);
      toast.error("Failed to update");
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger className="edit">
          <Button>
            <EditIcon />
            <h1 className="hidden sm:block">Edit content</h1>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle>Edit Home page contents</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="sm:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Heading</Label>
              <Input name="heading" placeholder="Enter New Heading"></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Bio</Label>
              <Textarea name="bio" placeholder="Enter new bio" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Resume link</Label>
              <Input name="resume" placeholder="Enter New Resume Link"></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter New Email"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>GithubId</Label>
              <Input name="github" placeholder="Enter New Heading"></Input>
            </div>
            <DrawerFooter>
              <Button type="submit">
                {IsLoading ? (
                  <div className="flex gap-2">
                    <Loader className="animate-spin " /> <h1>Updating</h1>
                  </div>
                ) : (
                  "Update"
                )}
              </Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
        <Toaster position="top-center" />
      </Drawer>
    </div>
  );
}
