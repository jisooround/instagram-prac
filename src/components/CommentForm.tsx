import React from "react";
import SmileIcon from "./ui/icons/SmileIcon";

type Props = {};

const CommentForm = (props: Props) => {
  return (
    <form className="px-4 flex items-center border-t border-neutral-300">
      <SmileIcon />
      <input
        className="w-full ml-2 p-3 outline-none"
        type="text"
        placeholder="Add a comment..."
      />
      <button className="font-bold text-orange-500 ml-2">Post</button>
    </form>
  );
};

export default CommentForm;
