import React from "react";
import { FaGraduationCap } from "react-icons/fa";

type Data = {
  title: string;
  date: string;
  description: string;
};

type TimelineProps = {
  data: Data[];
};

export default function Timeline({ data }: TimelineProps) {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-600 pl-2 ml-2 mt-6">
      {data.map((item, idx) => (
        <div key={idx} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {item.date ?? "date"}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.title ?? "Title"}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300">
            {item.description ?? "Description"}
          </p>
        </div>
      ))}
    </div>
  );
}


const timeline = [
  {
    title: "Started B.Tech",
    date: "August 2023",
    description: "Joined VSSUT in Information Technology.",
  },
  {
    title: "Learned MERN Stack",
    date: "March 2023",
    description:
      "Built several full-stack projects using MongoDB, Express, React, and Node.js,PostgreSql.",
  },
  {
    title: "Joined Enigma Coding Club",
    date: "August 2023",
    description: "Started contributing to open source and college projects.",
  },
  {
    title: "Started 100xDevs",
    date: "June 2024",
    description: "Learning backend system design and real-world skills.",
  },
];
console.log(timeline)