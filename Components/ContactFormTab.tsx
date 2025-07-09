import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeComponent from "./CodeComponent";

const code = `
const contactDetails = {
  name: "Gyanranjan Patra",
  email: "hi.gyanaranjanpatra@gmail.com",
  mobile: "7978648082",
  location: "Keonjar, Odisha",
  linkedIn: "linkedin.com/in/higyan",
  github: "github.com/gyannnnn",
};

function reachOut() {
  console.log(\`Reach out to me via email at \${contactDetails.email} or connect on LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`;

export default function ContactFormTab() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 ">
      <Tabs className="w-1/2" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Form</TabsTrigger>
          <TabsTrigger value="password">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="bg-transparent sm:w-[75vw] pt-10">
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input
                  required
                  id="tabs-demo-name"
                  placeholder="Your name, your fame"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Email</Label>
                <Input
                  required
                  type="email"
                  id="tabs-demo-username"
                  placeholder="where i can reach you back ?"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Message</Label>
                <Input
                  required
                  className="pb-[10vh] pt-6"
                  id="tabs-demo-username"
                  placeholder="Your words, my inbox"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full mt-4">Submit</Button>
            </CardFooter>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="sm:w-[75vw] w-[90vw]  bg-transparent pt-10">
            <h1>contactDetails.ts</h1>
            <CodeComponent code={code} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
