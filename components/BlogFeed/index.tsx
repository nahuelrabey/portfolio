import { listPosts, PostParams } from "../../libs/posts";
import style from "./Feed.module.scss";
import Image from "next/image";
import Link from "next/link";

type params = { posts: PostParams[] };
export default function Feed({ posts }: params) {
  return (
    <>
      <section className={style.Feed}>
        {posts.map(({ title, image, date, slug }, index) => {
          return (
            <article key={index}>
              <Link href={`post/${slug}`} className={style.link}>
                <div className={style.imgwrapper}>
                  <Image
                    alt={`${title} post image`}
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={style.header}>
                  <h3>{title}</h3>
                  <span>{date}</span>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
