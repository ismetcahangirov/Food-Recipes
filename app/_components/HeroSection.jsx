"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../(redux)/features/postsSlice";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const firstPost = posts?.[0];
  const firstFood = firstPost?.posts?.[0];

  if (!firstPost || !firstFood) return null;

  return (
    <section className="relative  w-full h-[650px] lg:h-[600px] flex items-center justify-center">
      <img
        src={firstFood.image}
        alt={firstFood.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-5xl mx-auto px-6 lg:px-20 space-y-6">
        <h1 className="text-white text-4xl lg:text-6xl font-bold">
          {firstPost.title}
        </h1>
        {firstPost.description && (
          <p className="text-white text-lg lg:text-xl">
            {firstPost.description}
          </p>
        )}
        <Button
          onClick={() => router.push(`/posts/${firstPost.id}`)}
          className="bg-amber-400 text-black py-5 px-8 cursor-pointer hover:bg-amber-500 transition-colors"
        >
          See Them All
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
