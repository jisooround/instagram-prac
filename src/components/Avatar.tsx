import { NodeNextRequest } from "next/dist/server/base-http/node";
import React from "react";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
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
        className="rounded-full object-cover"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
        // 구글의 이미지가 없을 경우를 대비 (외부 이미지를 불러 올 때 엑스박스로 인한 오류를 없애 줌)
      />
    </div>
  );
}

function getContainerStyle(size: string, hightlight: boolean): string {
  const baseStyle =
    "rounded-full flex justify-center items-center overflow-hidden"; // w-10 h-10
  const highlightStyle = hightlight
    ? "border-solid border-orange-500 border-[1px]"
    : "";
  const sizeStyle = size === "small" ? "w-10 h-10" : "w-[68px] h-[68px]";

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}
