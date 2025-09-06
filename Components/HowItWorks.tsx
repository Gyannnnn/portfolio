import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CodeBlock } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";

const code = `
{
    "userName":"Gyanaranjanpatra",
    "userEmail":"hi.gyanaranjanpatra@gmail.com",
    "userPassword":"gyan@Portfolio1212"
}

`;

export default function HowItWorks() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" className="text-sm font-medium">
          Want to see how it works?
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-x-scroll">
        <CodeBlock
          language="json"
          filename="credentials.json"
          highlightLines={[2, 3, 4]}
          code={code}
        />
      </DialogContent>
    </Dialog>
  );
}
