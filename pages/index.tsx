import Head from "next/head";
import { Inter } from "@next/font/google";
import { GetServerSideProps, GetStaticProps } from "next";
import { ISkill } from "../components/Skills";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Footer from "../components/Footer";
import BlogFeed from "../components/BlogFeed";

import { PostParams, getBatchPosts, listPosts, readPost } from "../libs/posts";
import LatestWorks from "../components/LatestWorks";

// import {CiTwitter} from "react-icons/ci"
// fonts
const inter = Inter({ subsets: ["latin"] });

type params = { skills: ISkill[]; posts: PostParams[]; tapa: PostParams };
export default function Home({ skills, posts, tapa }: params) {
  return (
    <>
      <Head>
        <title>Nahuel Rabey</title>
        <meta
          name="description"
          content="Conmigo tenes todo lo necesario para tener una página web. No importa si necesitás una tienda, un blog o mostrar datos de mercado en vivo. Diseño soluciones a medida para tus necesidades y objetivos."
        />
        <meta
          name="keywords"
          content="programador, desarrollador web, diseñador web, diseño web, desarrollo web,programador en Buenos Aires, desarrollador web en Buenos Aires, diseñador web en Buenos Aires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://i.ibb.co/cxNDrPK/Facebook-post-1.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={inter.style}>
        <Header skills={skills} />
        <Services />
        <Experience />
        <LatestWorks/>
        <BlogFeed pesos={posts} tapa={tapa}/>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<params> = async () => {
  const skills: ISkill[] = [
    {
      title: "Software Developer",
      catchPhrase: "trabajando en el futuro",
    },
    {
      title: "Web Developer",
      catchPhrase: "llevando negocios al hiper-espacio!",
    },
    {
      title: "Data Scientist",
      catchPhrase:
        "“El precio de la luz es menor que el costo de la oscuridad.” – Arthur C. Nielsen",
    },
  ];
  const _tapa = "programar-sistemas-bimonetarios";
  const tapa = readPost(_tapa).data
  const pesos = [
    "wordpress-creciemiento-empresarial.md",
    "elegir-proveedor-nube.md",
    "como-ahorrar-con-desarrollador.md",
  ];
  const posts = getBatchPosts(pesos);
  return {
    props: {
      skills,
      posts,
      tapa,
    },
  };
};
