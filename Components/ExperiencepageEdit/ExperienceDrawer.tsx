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
import { Divide, EditIcon, Loader } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function ExperienceDrawer({
  expDrawerDataProps,
}: {
  expDrawerDataProps: {
    role: string;
    experienceSectionId: string;
    portfolioId: string;
    token: string;
  };
}) {
  const [IsLoading, setLoading] = useState(false);
  const [SkillLoading, setSkillLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (expDrawerDataProps.role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const experienceDescription = formData.get("experienceDescription");
    const experienceHeading = formData.get("experienceHeading");

    const loadingId = toast.loading("Updating experience page");
    setSkillLoading(true);
    try {
      const res = await axios.put(
        "https://portfolio-be-flame.vercel.app/api/v1/experience/update",
        {
          experienceDescription,
          experienceHeading,
          portfolioId: expDrawerDataProps.portfolioId,
        },
        {
          headers: {
            Authorization: `Bearer ${expDrawerDataProps.token}`,
          },
        }
      );
      console.log(res);
      toast.remove(loadingId);
      toast.success("Updated Successfully");
      setSkillLoading(false);
    } catch (error) {
      setSkillLoading(false);
      toast.remove(loadingId);
      toast.error("Failed to update");
    }
  };
  const addExperienceHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (expDrawerDataProps.role === "Visitor") {
      toast.error("Visitors are not allowed");
      return;
    }
    const formData = new FormData(e.currentTarget);

    const experienceName = formData.get("experienceName");
    const experienceDescription = formData.get("newExperienceDescription");
    const joiningDate = formData.get("joiningDate");
    const joiningDateStr = joiningDate!.toString();
    const loadingId = toast.loading("Adding new skill");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/experience/add-exp",
        {
          experienceName,
          experienceDescription,
          joiningDate: new Date(joiningDateStr).toISOString(),
          experienceSectionId:expDrawerDataProps.experienceSectionId
        },
        {
          headers: {
            Authorization: `Bearer ${expDrawerDataProps.token}`,
          },
        }
      );
      console.log(res);
      toast.remove(loadingId);
      toast.success("Skill added successfully ");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.remove(loadingId);
      toast.error("Failed to Add new skill");
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
          <form
            onSubmit={handleSubmit}
            className="sm:w-1/2 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label>Experience Heading</Label>
              <Input
                name="experienceHeading"
                placeholder="Enter New Heading"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Experience description</Label>
              <Textarea
                name="experienceDescription"
                placeholder="Enter new experience section description"
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
                  "Update experience Page"
                )}
              </Button>
            </DrawerFooter>
          </form>
          <form
            onSubmit={addExperienceHandler}
            className="sm:w-1/2 flex flex-col gap-4"
          >
            <h1>Add new Experience</h1>
            <div className="flex flex-col gap-2">
              <Label>Experience Name</Label>
              <Input
                required
                name="experienceName"
                placeholder="Enter Experience "
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Experience Description</Label>
              <Textarea
                name="newExperienceDescription"
                placeholder="Enter new experience section description"
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
              {SkillLoading ? (
                <div className="flex gap-2">
                  <Loader className="animate-spin " /> <h1>Adding new skill</h1>
                </div>
              ) : (
                "Add new skill"
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
