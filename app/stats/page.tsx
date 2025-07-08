import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import GitHubCalendar from "react-github-calendar";
import GithubGraph from "@/Components/GithubGraph";
import BottomNav from "@/Components/BottomNav";
import axios from "axios";

const links = {
  preLinkName: "Contact",
  postLinkName: "Home",
  preLink: "/contact",
  postLink: "/",
};

export default async function StatsPage() {
  const data = await axios.get("https://api.github.com/users/gyannnnn");
  const gitData = data.data;
  console.log(gitData);
  const githubData = [
    { title: "Hireable", Data: "Yes" },
    { title: "Total Public Repository", Data: gitData.public_repos },
    { title: "Followers", Data: gitData.followers },
    { title: "Following", Data: gitData.following },
    { title: "Current Company", Data: gitData.company },
    { title: "Location", Data: gitData.location },
  ];
  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">About this portfolio</h1>
        <h1 className="text-lg">
          Insights and metrics about this portfolio website
        </h1>
        <div className="center justify-start gap-6 max-sm:flex-col">
          <Card className="sm:w-1/2 w-full h-56">
            <CardHeader className="flex items-center gap-2">
              <FaEye className="text-purple-600" />
              <h1 className="font-bold">Total views</h1>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <h1 className="statsCount text-purple-600">1934</h1>
              <p className="text-sm text-gray-300">
                Unique page visits since july 2025
              </p>
            </CardContent>
          </Card>
          <Card className="sm:w-1/2 w-full h-56 ">
            <CardHeader className="flex items-center gap-2">
              <FaRegHeart className="text-red-600" />
              <h1 className="font-bold">Appreciation Count</h1>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <h1 className="statsCount text-red-600">245</h1>
              <Button className="">
                <FaRegHeart /> <h1>Love this portfolio</h1>
              </Button>
            </CardContent>
          </Card>
        </div>
        <h1 className="heading">Github Stats (since {new Date(gitData.created_at).toLocaleDateString()})</h1>

        <h1 className="text-lg">
          Insights and metrics about my GitHub profile
        </h1>
        <div>
          <GithubGraph />
        </div>
        <div className="flex flex-wrap sm:justify-start items-center ">
          {githubData.map((data, index) => (
            <Card
              key={index}
              className="sm:w-[338px] w-full sm:mr-6 mb-6 bg-transparent"
            >
              <CardHeader className="text-xl">{data.title}</CardHeader>
              <CardContent className="text-5xl font-bold">
                {data.Data}
              </CardContent>
            </Card>
          ))}
        </div>
        <BottomNav links={links} />
      </div>
    </div>
  );
}
