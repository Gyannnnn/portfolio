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

export default function EditAboutPage({
  token,
  role,
}: {
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

    const aboutHeading = formData.get("aboutHeading");
    const about = formData.get("about");

    const loadingId = toast.loading("Editing");
    setLoading(true);
    try {
      const res = await axios.put(
        "https://portfolio-be-flame.vercel.app/api/v1/about/update",
        {
          aboutHeading,
          about,
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
        <DrawerTrigger className="edit">
          <Button>
            <EditIcon />
            <h1 className="hidden sm:block">Edit content</h1>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle>Edit About Page Contents</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="drawer">
            <div className="flex flex-col gap-2">
              <Label>About Heading</Label>
              <Input
                name="aboutHeading"
                placeholder="Enter New Heading"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>About description</Label>
              <Textarea name="about" placeholder="Enter new bio" />
            </div>
            <DrawerFooter>
              <Button type="submit">
                {IsLoading ? (
                  <div className="flex gap-2">
                    <Loader className="animate-spin " /> <h1>Updating</h1>
                  </div>
                ) : (
                  "Update About Page"
                )}
              </Button>
              <DrawerClose>
                <Button type="button" variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
        <Toaster position="top-center" />
      </Drawer>
    </div>
  );
}
