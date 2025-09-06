"use server";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Logout from "./Logout";

export default async function Profile() {
  const session = await auth();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="container py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader className="items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="/profile/profile.jpeg" alt="Profile picture" />
            <AvatarFallback className="text-lg">
              {session?.user?.name ? getInitials(session.user.name) : "US"}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">
            {session?.user?.name || "User"}
          </CardTitle>
          <CardDescription>Your Profile Information</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Separator />

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
            <p className="text-lg">
              {session?.user?.email || "No email provided"}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
            <p className="text-lg capitalize">
              {session?.user?.role || "No role specified"}
            </p>
          </div>

          <Separator />
          <Logout />
        </CardContent>
      </Card>
    </div>
  );
}
