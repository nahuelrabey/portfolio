import { listPosts, PostParams } from "../../libs/posts";
import style from "./Feed.module.scss";
import Image from "next/image";

type params = { posts: PostParams[] };
export default function Feed({ posts }: params) {
  return (
    <>
      <section className={style.Feed}>
        {posts.map(({ title, image, date, desc }, index) => {
          return (
            <article key={index}>
              <div className={style.imgwrapper}>
                <Image
                  alt={`${title} post image`}
                  src={image}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="header">
                <h3>{title}</h3>
                <span>{date}</span>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
