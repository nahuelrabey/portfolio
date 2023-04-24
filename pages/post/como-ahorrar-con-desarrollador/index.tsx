import { GetStaticProps } from "next";
import Post, {PostParams} from "../Post";
import ReactMarkdown from 'react-markdown'
import graymatter from "gray-matter"
import { readFileSync } from "fs";

type params = {content: string, frontMatter: PostParams}
export default function Article({content, frontMatter}:params) {
  return (
    <>
      <Post image={frontMatter.image} title={frontMatter.title}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Post>
    </>
  );
}

export const getStaticProps: GetStaticProps<params> = async ()=>{
  const fileContent = readFileSync("/home/nahuel/Proyectos/portfolio/website/posts/como-ahorrar-con-desarrollador.md", "utf-8")
  const {content, data} = graymatter(fileContent)
  return {
    props: {
      content: content,
      frontMatter: (data as unknown as PostParams)
    }
  }
}