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
        <Button 
          type="button" 
          variant="outline" 
          className="text-sm font-medium"
        >
          Want to see how it works?
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold">Demo Credentials</DialogTitle>
          <p className="text-muted-foreground">
            Use these credentials to test the admin functionality:
          </p>
        </DialogHeader>
        <div className="space-y-4">
          <CodeBlock
            language="json"
            filename="credentials.json"
            highlightLines={[2, 3, 4]}
            code={code}
          />
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> These are demo credentials for testing purposes only. 
              The actual admin credentials are different and secure.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
