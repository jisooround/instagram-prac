"use client";
import React from "react";
import useSWR from "swr";

export default function PostList() {
  const { data, isLoading: loading } = useSWR("/api/posts");
  console.log("data ::: ", data);
  return <div className="w-full">PostList</div>;
}
