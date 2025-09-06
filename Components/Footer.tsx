import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="min-h-[96px] py-6 w-full 
      bg-background 
      backdrop-blur-md border-t border-dotted
      border-gray dark:border-gray-700/50
      text-gray-600 dark:text-gray-400
      shadow-sm dark:shadow-gray-900/20
      transition-all duration-300 ease-in-out">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-28">
        
        <div className="flex flex-col items-center justify-center space-y-4 text-sm max-sm:text-xs">
         
          <div className="flex flex-wrap items-center justify-center gap-4 max-sm:flex-col max-sm:gap-2">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              © 2025
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Built with{" "}
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200 font-semibold 
                  transition-colors duration-200">
                  Next.js
                </span>
                ,{" "}
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200 font-semibold 
                  transition-colors duration-200">
                  shadcn/ui
                </span>
                {" "}and{" "}
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200 font-semibold 
                  transition-colors duration-200">
                  Tailwind CSS
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Coded in{" "}
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200 font-semibold 
                  transition-colors duration-200">
                  VScode editor
                </span>
                {" "}and deployed on{" "}
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200 font-semibold 
                  transition-colors duration-200">
                  Vercel
                </span>
              </p>
            </div>
          </div>

          {/* Developer Info */}
          <div className="text-center pt-2 border-t border-gray-200/50 dark:border-gray-700/50 w-full">
            <p className="text-gray-600 dark:text-gray-300">
              Developed by{" "}
              <Link 
                className="font-semibold text-blue-600 dark:text-blue-400 
                  hover:text-blue-700 dark:hover:text-blue-300 
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                  rounded px-1" 
                href="https://github.com/gyannnnn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gyanranjan Patra
              </Link>
              {" "}· Source code available on{" "}
              <Link 
                className="font-semibold text-blue-600 dark:text-blue-400 
                  hover:text-blue-700 dark:hover:text-blue-300 
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                  rounded px-1" 
                href="https://github.com/gyannnnn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
