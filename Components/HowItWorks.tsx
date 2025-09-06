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
      <DialogTrigger>
        <Button type="button">Want to see how it works ?</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Email & Password</DialogTitle>
          <CodeBlock
            language="jsx"
            filename=""
            highlightLines={[9, 13, 14, 18]}
            code={code}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
