import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "./posts");

type IPost = {
  [key: string]: any;
  date: number;
  title: string;
  // image: string;
  content: string;
};

export function getSortedPosts() {
  const filename = fs.readdirSync(postsDirectory);
  const allPostsData = filename.map((filename) => {
    const id = filename.replace(/\.md\$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return (allPostsData as unknown as IPost[]).sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getPost(slug: string): IPost {
  console.log(slug);
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  return {
    // id: slug,
    ...matterResult.data,
    content: fileContents,
  } as IPost;
}
