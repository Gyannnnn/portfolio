import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  FaEye,
  FaRegHeart,
  FaCode,
  FaUsers,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import GithubGraph from "@/Components/GithubGraph";
import BottomNav from "@/Components/BottomNav";
import axios from "axios";
import React from "react";
import LikeButton from "@/Components/LikeButton";
import { generateMetadata as generateSEOMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Portfolio Stats | Gyanranjan Patra",
  description:
    "Portfolio statistics and GitHub insights for Gyanranjan Patra, a VSSUT Burla graduate. View portfolio views, GitHub activity, and development metrics.",
  keywords: [
    "Gyanranjan Patra stats",
    "Gyanaranjan Patra VSSUT",
    "VSSUT Burla stats",
    "portfolio statistics",
    "GitHub stats",
    "developer metrics",
    "portfolio views",
    "GitHub activity",
    "development statistics",
    "programming metrics",
    "code statistics",
  ],
  canonicalUrl: "https://gyanpatra.dev.iitkirba.xyz/stats", 
  ogImage: "/profile/og.png",
  ogType: "website",
  twitterCard: "summary_large_image",
});

const links = {
  preLinkName: "Contact",
  postLinkName: "Home",
  preLink: "/contact",
  postLink: "/",
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
  created_at: string;
};

type statsData = {
  message: string;
  data: { views: number; likes: number };
};

export default async function StatsPage() {
  const gitDataRes = await axios.get<GitHubUser>(
    "https://api.github.com/users/gyannnnn"
  );
  const statsData = await axios.get<statsData>(
    "https://portfolio-be-flame.vercel.app/api/v1/stats/get"
  );
  const data = statsData.data;
  const gitData = gitDataRes.data;
  console.log(data);

  const githubData = [
    {
      title: "Hireable",
      Data: "Yes",
      icon: FaCheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Public Repositories",
      Data: gitData.public_repos,
      icon: FaCode,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Followers",
      Data: gitData.followers,
      icon: FaUsers,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Following",
      Data: gitData.following,
      icon: FaUsers,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "Current Company",
      Data: gitData.company || "Freelance",
      icon: FaBuilding,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      title: "Location",
      Data: gitData.location || "Remote",
      icon: FaMapMarkerAlt,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">About this portfolio</h1>
        <p className="description">
          Insights and metrics about this portfolio website
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-purple-200 dark:hover:border-purple-800  bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/10 dark:to-background">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-purple-600 text-3xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Total Views</h2>
                  <p className="text-sm text-muted-foreground">
                    Portfolio engagement
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-center space-y-6">
                <div className="text-8xl font-bold text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {data.data.views.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  Unique page visits since August 2025
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-red-200 dark:hover:border-red-800 bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-background">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaRegHeart className="text-red-600 text-3xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Appreciation</h2>
                  <p className="text-sm text-muted-foreground">
                    Community support
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-center space-y-6">
                <div className="text-8xl font-bold text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {data.data.likes.toLocaleString()}
                </div>
                <div className="flex justify-center">
                  <LikeButton />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Stats Section */}
        <div className="space-y-6 mb-16">
          <div className="space-y-3">
            <h1 className="heading">GitHub Activity</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Development insights and metrics from my GitHub profile since{" "}
              <span className="font-semibold text-foreground">
                {new Date(gitData.created_at).toLocaleDateString()}
              </span>
            </p>
          </div>

          {/* GitHub Graph Container */}
          <div className="bg-muted/30 rounded-2xl p-8 border hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center">
              <GithubGraph />
            </div>
          </div>
        </div>

        {/* GitHub Profile Stats Grid */}
        <div className="space-y-6 mb-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Profile Statistics</h2>
            <p className="text-lg text-muted-foreground">
              Key metrics and information from my GitHub profile
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubData.map((data, index) => {
              const IconComponent = data.icon;
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-300 border-2 hover:scale-105 ${
                    index === 0
                      ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700"
                      : "hover:border-primary/20 dark:hover:border-primary/30"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${data.bgColor}`}>
                        <IconComponent className={`text-xl ${data.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-muted-foreground">
                        {data.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className={`text-3xl font-bold ${data.color}`}>
                      {typeof data.Data === "number"
                        ? data.Data.toLocaleString()
                        : data.Data}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <BottomNav links={links} />
        </div>
        
      </div>
    </div>
  );
}
