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
import { useRouter } from "next/navigation";

export default function ProjectDrawer({
  token,
  role,
  id,
}: {
  token: string;
  role: string;
  id: string;
}) {
  const [IsLoading, setLoading] = useState(false);
  const router = useRouter()
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
    console.log(id,
          projectName,
          projectDescription,
          githubLink,
          deployedLink)
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
      router.push("/projects")
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
            Edit content
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle>Edit Projects details</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Project Name</Label>
              <Input
              required
                name="projectName"
                placeholder="Enter Project Name"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Project Description</Label>
              <Textarea
                name="projectDescription"
                placeholder="Enter new Description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Github Link</Label>
              <Input
                name="githubLink"
                placeholder="Enter New Github Link"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Deployed Link</Label>
              <Input
                name="deployedLink"
                placeholder="Enter New Deployed Link"
              ></Input>
            </div>
            <DrawerFooter>
              <Button type="submit">
                {IsLoading ? (
                  <div className="flex gap-2">
                    <Loader className="animate-spin " /> <h1>Updating</h1>
                  </div>
                ) : (
                  "Update Project"
                )}
              </Button>
              <DrawerClose className="w-full">
                <Button type="button" variant="outline" className="w-full mt-2">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>          
        </DrawerContent>
        <Toaster position="top-center" />
      </Drawer>
    </div>
  );
}
