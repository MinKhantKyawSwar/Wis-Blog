import React from "react";
import { useLoaderData } from "react-router-dom";
import HomePostItem from "../components/HomePostItem";
import HeroSection from "../components/HeroSection";

const HomePosts = () => {
  const posts = useLoaderData();
  return (
    <>
      <HeroSection post={posts} />
    </>
  );
};

export default HomePosts;

export const loader = async () => {
  const response = await fetch(`http://localhost:8080/posts`);

  if (!response.ok) {
    throw new Error("");
  } else {
    const data = await response.json();
    return data.posts;
  }
};
