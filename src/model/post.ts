// model 폴더는 타입 지정

export type Comment = {
  comment: string;
  username: string;
  image: string;
};

export type SimplePost = Omit<FullPost, "comment"> & {
  comments: number;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment;
};
