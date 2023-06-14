import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, username, email, image, name }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
    ...,
    "id":_id,
    following[] -> {username, image},
    followers[] -> {username, image},
    "bookmarks":bookmarks[] -> _id
  }`,
  );

  // 로그인한 정보가 없다면 인증 관련 에러 보냄(코드 401)
}
