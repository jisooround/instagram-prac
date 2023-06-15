"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import React from "react";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  // 리액트쿼리와 상당히 비슷하다.
  console.log(isLoading);
  console.log(data);
  // const users = data?.following;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];
  // const users = undefined;
  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴
  // 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌

  return (
    <section className=" w-full h-28 mx-6 rounded-xl shadow-lg shadow-gray-300 flex items-center px-5 overflow-x-auto">
      {isLoading ? (
        <BeatLoader
          className="w-full flex justify-center"
          size={8}
          color="orange"
        />
      ) : (
        (!users || users.length === 0) && (
          <p className="w-full font-bold text-orange-500 text-xl text-center">{`You don't have followings. 😅`}</p>
        )
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }, idx) => (
            <Link
              key={idx}
              href={`/user/${username}`}
              className="w-[68px] flex flex-wrap justify-center mx-auto"
            >
              <Avatar image={image} size="normal" hightlight />
              <p className="pt-1 text-sm text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
