"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

export default function GithubGraph() {
  const { theme } = useTheme();
  const colorScheme: "light" | "dark" | undefined =
    theme === "light" || theme === "dark" ? theme : undefined;
  return (
    <div className="w-full overflow-x-auto  ">      
      <GitHubCalendar
        username="gyannnnn"
        colorScheme={colorScheme}
        blockSize={14}
        blockMargin={5}
        fontSize={14}
        year="last"
      />
    </div>
  );
}
