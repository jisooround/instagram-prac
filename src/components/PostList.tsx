"use client";
import { SimplePost } from "@/model/post";
import postcss from "postcss";
import React from "react";
import { GridLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");
  console.log("data :::  ", posts);
  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="orange" />
        </div>
      )}
      {posts && (
        <ul className="w-full">
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
