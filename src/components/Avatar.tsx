import { NodeNextRequest } from "next/dist/server/base-http/node";
import React from "react";

type AvatarSize = "small" | "medium" | "large";

type Props = {
  image?: string | null;
  size?: AvatarSize;
  hightlight?: boolean;
};

export default function Avatar({
  image,
  size = "small",
  hightlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, hightlight)}>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={`object-cover rounded-fit  ${getImageSizeStyle(size)}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
        // 구글의 이미지가 없을 경우를 대비 (외부 이미지를 불러 올 때 엑스박스로 인한 오류를 없애 줌)
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, hightlight: boolean): string {
  const baseStyle =
    "rounded-full flex justify-center items-center overflow-hidden"; // w-10 h-10
  const highlightStyle = hightlight
    ? "border-solid border-orange-500 border-[1px]"
    : "";
  const sizeStyle = getContainerSize(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  // size === "small" ? "w-10 h-10" : "w-[68px] h-[68px]";
  switch (size) {
    case "small":
      return '"w-10 h-10';
    case "medium":
      return "w-[42px] h-[42px]";
    case "large":
      return "w-[68px] h-[68px]";
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  // size === "small" ? "w-10 h-10" : "w-[68px] h-[68px]";
  switch (size) {
    case "small":
      return '"w-[34px] h-[34px]';
    case "medium":
      return "w-[42px] h-[42px]";
    case "large":
      return "w-16 h-16";
  }
}
