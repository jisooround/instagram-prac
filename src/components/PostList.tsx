"use client";
import { SimplePost } from "@/model/post";
import React from "react";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import GridSpinner from "./GridSpinner";

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");
  console.log("data :::  ", posts);
  return (
    <section className="w-full mx-6">
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner />
        </div>
      )}
      {posts && (
        <ul className="w-full">
          {posts &&
            posts.map((post, idx) => (
              <li key={post.id}>
                <PostListCard post={post} priority={idx < 2} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
