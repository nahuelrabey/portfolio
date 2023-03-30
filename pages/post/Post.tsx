import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import style from "./Post.module.scss";
const inter = Inter({ subsets: ["latin"] });
type param = { children: JSX.Element[], image: string };
export default function Post({ children, image }: param) {
  return (
    <>
      <Head>
        <title>¿Porqué contratar un desarrollador web?</title>
        <meta
          name="description"
          content="¿Quieres ahorrar dinero y tiempo en tu proyecto web? Acá te cuento porqué contratar a un desarrollador profesional te garantizará calidad y eficiencia."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gJWwz7J/ahorrar-tiempo-dinero-1.png"
        />
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
        <div className={style.content}>
            {children}
        </div>
      </section>
      <Footer />
    </>
  );
}
