import React from "react";

type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className="rounded-full w-10 h-10 border-solid border-orange-500 border-[1px] mr-3">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
        // 구글의 이미지가 없을 경우를 대비 (외부 이미지를 불러 올 때 엑스박스로 인한 오류를 없애 줌)
      />
    </div>
  );
}
