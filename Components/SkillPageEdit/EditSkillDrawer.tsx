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

export default function EditSkillDrawer({
  skillSectionProps
}: {
  skillSectionProps:{
    token:string,
    role:string,
    portfolioId:string,
    skillSectionId:string
  }
}) {
  const [IsLoading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (skillSectionProps.role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const skillHeading = formData.get("skillHeading");
    const skillDescription = formData.get("skillDescription");

    const loadingId = toast.loading("Editing");
    setLoading(true);
    try {
      const res = await axios.put(
        "https://portfolio-be-flame.vercel.app/api/v1/about/update",
        {
          skillHeading,
          skillDescription,
          portfolioId:skillSectionProps.portfolioId
        },
        {
          headers: {
            Authorization: `Bearer ${skillSectionProps.token}`,
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
            Edit content
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle>Edit About Page Contents</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Skill Heading</Label>
              <Input
                name="skillHeading"
                placeholder="Enter New Heading"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Skill description</Label>
              <Textarea name="skillDescription" placeholder="Enter new skill section description" />
            </div>
            <DrawerFooter>
              <Button type="submit">
                {IsLoading ? (
                  <div className="flex gap-2">
                    <Loader className="animate-spin " /> <h1>Updating</h1>
                  </div>
                ) : (
                  "Update Skill Page"
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
