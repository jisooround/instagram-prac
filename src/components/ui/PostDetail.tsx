import { FullPost, SimplePost } from "@/model/post";
import React from "react";
import userSWR from "swr";

type Props = {
  post: SimplePost;
};

const PostDetail = ({ post }: Props) => {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/posts/${id}`);
  return <div>PostDetail</div>;
};

export default PostDetail;
