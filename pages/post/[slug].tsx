import { GetServerSideProps, GetStaticProps } from "next"
import { inspect } from "util"
import { getPost } from "../../lib/posts"
import ReactMarkdown from "react-markdown"
import { ReactElement } from "react-markdown/lib/react-markdown"

type params = {content: string}
export default function Post({content}:params) {
    return (
        <section>
            <ReactMarkdown>{content}</ReactMarkdown>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps<params> = async ({ req, query, resolvedUrl }) => {
    const slug: string = query["slug"] as string;
    const post = getPost(slug)
    console.log(post)

    return {
        props: {content: post.content}
    }
}