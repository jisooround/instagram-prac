export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<User, "username" | "image">;
// type User에서 선택할 수 있다.

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};
