import { ImSpinner2 } from "react-icons/im";
import React from 'react'

export default function loading() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen w-full bg-background text-foreground animate-fade-in">
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-primary/10 dark:bg-zinc-800 animate-pulse" />
        <ImSpinner2 className="text-primary dark:text-white animate-spin text-5xl z-10" />
      </div>
      <span className="mt-6 text-lg font-semibold tracking-wide text-primary dark:text-white opacity-80">Loading...</span>
    </div>
  )
}