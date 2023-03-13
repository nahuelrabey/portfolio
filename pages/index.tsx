import Head from "next/head";
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import { ISkill } from "../components/Skills";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Footer from "../components/Footer";

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
        <Footer/>
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
