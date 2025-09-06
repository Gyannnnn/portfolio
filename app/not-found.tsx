"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container ">
      <div className="flex h-[50vh] justify-center items-center">
        <div>
          <h1 className="text-7xl font-extrabold text-red-500">404</h1>
          <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
          <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn’t exist or may have been
            moved. 
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-red-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-red-600"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
