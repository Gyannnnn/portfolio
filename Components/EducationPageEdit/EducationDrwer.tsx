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

export default function EducationDrawer({
  eduDrawerDataProps,
}: {
  eduDrawerDataProps: {
    role: string;
    educationSectionId: string;
    portfolioId: string;
    token: string;
  };
}) {
  const [IsLoading, setLoading] = useState(false);
  const [EducationLoading, setEducationLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (eduDrawerDataProps.role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const educationHeading = formData.get("educationHeading");
    const educationDescription = formData.get("educationDescription");

    const loadingId = toast.loading("Updating education page");
    setLoading(true);
    try {
      const res = await axios.put(
        "https://portfolio-be-flame.vercel.app/api/v1/education/update",
        {
          educationHeading,
          educationDescription,
          portfolioId: eduDrawerDataProps.portfolioId,
        },
        {
          headers: {
            Authorization: `Bearer ${eduDrawerDataProps.token}`,
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
  const addEducationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (eduDrawerDataProps.role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const educationName = formData.get("educationName");
    const educationDescription = formData.get("newEducationDescription");
    const joiningDate = formData.get("joiningDate");
    const joiningDateStr = joiningDate!.toString();
    const loadingId = toast.loading("Adding new Education");
    setEducationLoading(true);
    try {
      const res = await axios.post(
        "https://portfolio-be-flame.vercel.app/api/v1/education/add-education",
        {
          educationName,
          educationDescription,
          joiningDate: new Date(joiningDateStr).toISOString(),
          educationSectionId: eduDrawerDataProps.educationSectionId,
        },
        {
          headers: {
            Authorization: `Bearer ${eduDrawerDataProps.token}`,
          },
        }
      );
      console.log(res);
      toast.remove(loadingId);
      toast.success("Education added successfully ");
      setEducationLoading(false);
    } catch (error) {
      setEducationLoading(false);
      toast.remove(loadingId);
      toast.error("Failed to Add new Education");
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
          <form
            onSubmit={handleSubmit}
            className="sm:w-1/2 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label>Education Heading</Label>
              <Input
                name="educationHeading"
                placeholder="Enter New Heading"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Education description</Label>
              <Textarea
                name="educationDescription"
                placeholder="Enter new education section description"
              />
            </div>

            <div></div>
            <DrawerFooter>
              <Button type="submit">
                {IsLoading ? (
                  <div className="flex gap-2">
                    <Loader className="animate-spin " /> <h1>Updating</h1>
                  </div>
                ) : (
                  "Update education Page"
                )}
              </Button>
            </DrawerFooter>
          </form>
          <form
            onSubmit={addEducationHandler}
            className="sm:w-1/2 flex flex-col gap-4"
          >
            <h1>Add new Education</h1>
            <div className="flex flex-col gap-2">
              <Label>Education title</Label>
              <Input
                required
                name="educationName"
                placeholder="Enter Education "
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Education Description</Label>
              <Textarea
                name="newEducationDescription"
                placeholder="Enter education description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Joining Date</Label>
              <Input
                type="date"
                name="joiningDate"
                placeholder="Enter Joining date"
              ></Input>
            </div>
            <Button type="submit">
              {EducationLoading ? (
                <div className="flex gap-2">
                  <Loader className="animate-spin " />{" "}
                  <h1>Adding new Education</h1>
                </div>
              ) : (
                "Add new education"
              )}
            </Button>
          </form>
          <DrawerClose className="mt-2 mb-10">
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerContent>
        <Toaster position="top-center" />
      </Drawer>
    </div>
  );
}
