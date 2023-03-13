import Head from "next/head";
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import { ISkill } from "../components/Skills";
import Header from "../components/Header";
import style from "./Home.module.css";
import Experience from "../components/Experience";
import Services from "../components/Services";

import { BsWhatsapp, BsTwitter, BsLinkedin } from "react-icons/bs";
// import {CiTwitter} from "react-icons/ci"
// fonts
const inter = Inter({ subsets: ["latin"] });

type params = { skills: ISkill[] };
export default function Home({ skills }: params) {
  return (
    <>
      <Head>
        <title>Nahuel Rabey</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={inter.style}>
        <Header skills={skills} />
        <Services />
        <Experience />
        <section className={style.footer}>
          <div className={style.content}>
            <h2>Contacto</h2>
            <p>
              Internet y la teconología pueden ser abrumadoras. En caso de
              necesitar asesoría para, o el desarrollo completo, de un proyecto
              que tengas en mente, podemos coordinar una primer llamada sin
              costo. ¡Mucha suerte!
            </p>
            <div className={style.networks}>
              <a className={style.social}>
                <BsLinkedin />
              </a>
              <a className={style.social}>
                <BsTwitter color="white" />
              </a>
              <a className={style.social}>
                <BsWhatsapp />
              </a>
              <button className={style.directContact}>+59 11-3213-4807</button>
              <button className={style.directContact}>
                nahuelrabeywork@gmail.com
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<params> = async () => {
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
  return {
    props: {
      skills,
    },
  };
};
