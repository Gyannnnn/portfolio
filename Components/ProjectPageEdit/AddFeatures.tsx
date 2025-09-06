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

export default function AddFeatures({
  token,
  role,
  id,
}: {
  token: string;
  role: string;
  id: string;
}) {
  const [IsLoading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const projectName = formData.get("projectName");
    const projectDescription = formData.get("projectDescription");
    const githubLink = formData.get("githubLink");
    const deployedLink = formData.get("deployedLink");
    console.log(id, projectName, projectDescription, githubLink, deployedLink);
    const loadingId = toast.loading("Updating");
    setLoading(true);
    try {
      const res = await axios.put(
        "https://portfolio-be-flame.vercel.app/api/v1/projects/project/update",
        {
          id,
          projectName,
          projectDescription,
          githubLink,
          deployedLink,
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.remove(loadingId);
      toast.error("Failed to update");
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Button>
            <EditIcon />
            Edit Feature
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-4 items-center">
          <DrawerHeader>
            <DrawerTitle>Edit Projects details</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Add fetaure</Label>
              <Input name="feature" placeholder="Enter feature"></Input>
            </div>
            <Button type="submit">Add feature</Button>
          </form>
          <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Add challenge</Label>
              <Input name="challenge" placeholder="Enter feature"></Input>
            </div>
            <Button type="submit">Add challenge</Button>
          </form>
          <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Add learning</Label>
              <Input name="learning" placeholder="Enter learning"></Input>
            </div>
            <Button type="submit">Add learning</Button>
          </form>
          <DrawerFooter>
            <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          </DrawerFooter>
          
        </DrawerContent>
        <Toaster position="top-center" />
      </Drawer>
    </div>
  );
}
