import React from "react";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";

type Props = {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
};

const ActionBar = ({ likes, username, text, createdAt }: Props) => {
  return (
    <>
      <div className="flex justify-between my-3 px-4">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div>
        <p className="text-sm font-bold mb-2 px-4">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        <p>
          <span className="pl-4 pr-2 font-bold">{username}</span>
          {text}
        </p>
        <p className="px-4 my-4 text-xs text-neutral-500 uppercase">
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
};

export default ActionBar;
