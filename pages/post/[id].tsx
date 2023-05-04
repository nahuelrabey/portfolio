import { GetStaticPaths, GetStaticProps } from "next";
import { PostParams, listSlugs, readPost } from "../../libs/posts";
import ReactMarkdown from "react-markdown";
import Post from "../../components/Post";

type ArticleParams = { matter: PostParams; content: string };
export default function Article({ matter, content }: ArticleParams) {
  return (
    <>
      <Post image={matter.image} title={matter.title} date={matter.date} slug="" og_image={matter.og_image || ""}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Post>
    </>
  );
}

type StaticParams = { id: string };
export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const posts = listSlugs();
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((slug) => ({
    params: { id: slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ArticleParams,
  StaticParams
> = async ({ params }) => {
  const { content, data } = readPost((params as StaticParams).id);
  return {
    props: {
      content,
      matter: data,
    },
  };
};
