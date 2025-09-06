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

export default function AddProjectDrawer({
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
    const projectHeading = formData.get("projectHeading");
    const projectDescription = formData.get("projectDescription");
    const techStack = formData.get("techStack") as string;
    const features = formData.get("features") as string;
    const challenges = formData.get("challenges") as string;
    const learnings = formData.get("learnings") as string;
    const githubLink = formData.get("githubLink");
    const deployedLink = formData.get("deployedLink");

    const techStackArray = techStack!.split(",").map((item) => item.trim());
    const featuresArray = features!.split(",").map((item) => item.trim());
    const learningsArray = learnings!.split(",").map((item) => item.trim());
    const challengesArray = challenges!.split(",").map((item) => item.trim());

    console.log(id, projectName, projectDescription, githubLink, deployedLink);
    const loadingId = toast.loading("Adding");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://portfolio-be-flame.vercel.app/api/v1/projects/project/create",
        {
          projectSectionId: id,
          projectName,
          projectHeading,
          projectDescription,
          techStack: techStackArray,
          features: featuresArray,
          challenges: challengesArray,
          learnings: learningsArray,
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
      toast.success("Project added Successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.remove(loadingId);
      toast.error("Failed to add project");
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger className="edit">
          <Button>
            <EditIcon />
            <h1 className="sm:block hidden">Add New Project</h1>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center max-h-screen overflow-y-auto p-4">
          <DrawerHeader className="max-sm:hidden">
            <DrawerTitle>Add new project</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label>Project Name</Label>
              <Input name="projectName" placeholder="Enter Project Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Project heading</Label>
              <Input
                name="projectHeading"
                placeholder="Enter Project Heading (Short description)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Project Description</Label>
              <Textarea
                name="projectDescription"
                placeholder="Enter Project Description"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col gap-2 md:w-1/2 w-full">
                <Label>Project Techstack</Label>
                <Input
                  name="techStack"
                  placeholder="NextJs, Typescript, Prisma & ORM, Shadcn UI"
                />
              </div>
              <div className="flex flex-col gap-2 md:w-1/2 w-full">
                <Label>Project Features</Label>
                <Input
                  name="features"
                  placeholder="feature1, feature2, feature3,"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col gap-2 md:w-1/2 w-full">
                <Label>Project challenges</Label>
                <Input
                  name="challenges"
                  placeholder="challenge1,challenge2 , challenge3,"
                />
              </div>
              <div className="flex flex-col gap-2 md:w-1/2 w-full">
                <Label>Project learnings</Label>
                <Input
                  name="learnings"
                  placeholder="learning1,learning2 , learning3,"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Github Link</Label>
              <Input name="githubLink" placeholder="Enter New Github Link" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Deployed Link</Label>
              <Input
                name="deployedLink"
                placeholder="Enter New Deployed Link"
              />
            </div>
            <DrawerFooter className="flex flex-col md:flex-row gap-2">
              <Button type="submit" className="w-full md:w-auto">
                {IsLoading ? (
                  <div className="flex gap-2 items-center justify-center">
                    <Loader className="animate-spin" /> Updating
                  </div>
                ) : (
                  "Update Project"
                )}
              </Button>
              <DrawerClose>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full md:w-auto"
                >
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>

        <Toaster position="top-center" />
      </Drawer>
    </div>
  );
}
