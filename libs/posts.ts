import { maybe, objectOf } from "@altostra/type-validations";
import { string } from "@altostra/type-validations/lib/primitives";
import matter from "gray-matter";
import * as fs from "fs";
import { inspect } from "util";
import { join } from "path";

export type PostParams = {
  slug: string;
  title: string;
  image: string;
  date: string;
  desc?: string;
  keywords?: string;
  og_image?: string;
};

export const isPost = objectOf<PostParams>({
  slug: string,
  title: string,
  date: string,
  image: string,
  desc: maybe(string),
  keywords: maybe(string),
  og_image: maybe(string),
});

function getPath() {
  return join(process.cwd(), `/posts`);
}

export function listPosts() {
  const POSTS_PATH = getPath();
  const files = fs.readdirSync(POSTS_PATH);
  const posts = files.map((fname) => {
    const fileContent = fs.readFileSync(join(POSTS_PATH, fname), "utf-8");
    const { data } = matter(fileContent);
    if (!isPost(data)) {
      throw (
        "data doesn't match post structure\n" + inspect(data, { depth: null })
      );
    }
    return data;
  });
  return posts;
}

export function getBatchPosts(names:string[]){
  const POSTS_PATH = getPath();
  const files = fs.readdirSync(POSTS_PATH).filter((file)=>names.includes(file));
  const posts = files.map((fname) => {
    const fileContent = fs.readFileSync(join(POSTS_PATH, fname), "utf-8");
    const { data } = matter(fileContent);
    if (!isPost(data)) {
      throw (
        "data doesn't match post structure\n" + inspect(data, { depth: null })
      );
    }
    return data;
  });
  return posts;
}

export function listSlugs() {
  const POSTS_PATH = getPath();
  const files = fs.readdirSync(POSTS_PATH);
  const slugs = files.map((fname) => {
    const fileContent = fs.readFileSync(join(POSTS_PATH, fname), "utf-8");
    const { data } = matter(fileContent);
    if (!isPost(data)) {
      throw (
        "data doesn't match post structure\n" + inspect(data, { depth: null })
      );
    }
    return data.slug
  });
  return slugs;
}

export function readPost(fileName: string) {
  const file = join(process.cwd(), `/posts/${fileName}.md`);

  const fileContent = fs.readFileSync(file, "utf-8");
  const { content, data } = matter(fileContent);

  if (!isPost(data)) {
    throw (
      "data doesn't match post structure\n" + inspect(data, { depth: null })
    );
  }
  return { content, data };
}
