import { SimplePost } from "@/model/post";
import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";

type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <>
      <div>
        <Avatar image={userImage} hightlight />
        <span>{username}</span>
      </div>
      <Image
        src={`${image}`}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div>
        {/* <HeartIcon />
        <BookmarkIcon /> */}
      </div>
    </>
  );
}
