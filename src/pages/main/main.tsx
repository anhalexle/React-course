import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { AllPost } from "./post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");
  const getPosts = async () => {
    try {
      const data = await getDocs(postsRef);
      setPostList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {postList?.map((post, index) => (
        <AllPost key={index} post={post} />
      ))}
    </div>
  );
};
