"use client";

import { SimplePost } from "@/model/post";
import React, { useState } from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="rounded-lg shadow-md border border-gray-200 my-10">
      <div className="flex items-center p-3 box-content">
        <Avatar image={userImage} hightlight size="medium" />
        <span className="text-gray-900 font-bold ml-3">{username}</span>
      </div>
      <Image
        className="cursor-pointer"
        onClick={() => setOpenModal(true)}
        src={`${image}`}
        alt={`photo by ${username}`}
        width={1000}
        height={1000}
        priority={priority}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            포스트 상세 페이지
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
