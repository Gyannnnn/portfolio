"use server";

import { auth } from "@/auth";

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
    <div className="container">   

      {/* Profile Card */}
      <Card className="w-full shadow-lg border-2">
        <CardHeader className="items-center text-center pb-8">
          <div className="relative">
            <Avatar className="h-32 w-32 mb-6 ring-4 ring-primary/20">
              <AvatarImage src="/profile/profile.jpeg" alt="Profile picture" />
              <AvatarFallback className="text-2xl font-bold">
                {session?.user?.name ? getInitials(session.user.name) : "US"}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
          </div>
          <CardTitle className="text-3xl font-bold">
            {session?.user?.name || "User"}
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Portfolio {session?.user?.role}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 px-8 pb-8">
          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Email Address
              </h3>
              <p className="text-lg font-medium break-all">
                {session?.user?.email || "No email provided"}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Role
              </h3>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold capitalize">
                  {session?.user?.role || "No role specified"}
                </span>
              </div>
            </div>
          </div>

          <Separator className="my-6" />
          
          <div className="flex justify-center">
            <Logout />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
