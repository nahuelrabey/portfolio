import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Footer from "../Footer";
import Menu from "../Menu";
import style from "./Post.module.scss";
const inter = Inter({ subsets: ["latin"] });

import {PostParams} from "../../libs/posts"

type params = PostParams & {
  children: JSX.Element[] | JSX.Element;
};
export default function Post({
  children,
  image,
  date,
  og_image = "",
  desc = "",
  title = "",
  keywords = "",
}: params) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:image" content={og_image} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Menu />
      <section className={style.post} style={inter.style}>
        <div className={style.cover}>
          <Image
            src={image}
            alt="Money image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={style.content}>{children}</div>
      </section>
      <Footer />
    </>
  );
}
