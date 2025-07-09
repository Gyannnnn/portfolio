import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function CodeComponent({ code }: { code: string }) {
  return (
    <div className=" mx-auto w-full pt-2">
    
      <CodeBlock
        language="jsx"
        filename=""
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
