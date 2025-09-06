"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const alreadyLiked = localStorage.getItem("portfolioLiked");
    if (alreadyLiked) {
      setLiked(true);
    }
  }, []);

  const handleLike = async () => {
    if (liked) {
      toast.error("You already liked");
      return;
    }

    try {
      const res = await axios.put(
        "https://portfolio-be-flame.vercel.app/api/v1/stats/likes/update"
      );
      const data = res.data;

      // Mark as liked in localStorage
      localStorage.setItem("portfolioLiked", "true");
      setLiked(true);

      console.log("Likes:", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button
        type="button"
        variant="default"
        className={`flex items-center gap-2 ${liked ? "bg-red-500 text-white hover:bg-red-400" : ""}`}
        onClick={handleLike}
      >
        <FaRegHeart /> Love this portfolio
      </Button>
      <Toaster />
    </div>
  );
}
