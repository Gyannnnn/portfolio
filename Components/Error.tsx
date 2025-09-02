import React from "react";

export default function Error({ error }: { error: string }) {
  return (
    <div className="h-[90vh] w-screen center">
      <h1 className="text-white">{error}</h1>
    </div>
  );
}
