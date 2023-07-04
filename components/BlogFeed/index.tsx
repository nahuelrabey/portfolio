import { listPosts, PostParams } from "../../libs/posts";
import style from "./Feed.module.scss";
import Image from "next/image";
import Link from "next/link";

type params = { pesos: PostParams[]; tapa: PostParams };
export default function Feed({ pesos, tapa }: params) {
  return (
    <>
      <section className={style.Feed}>
        <h2>últimas publicaciónes</h2>
        <div className={style.pesos}>
          {pesos.map(({ title, image, date, slug }, index) => {
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
        </div>
      </section>
    </>
  );
}
