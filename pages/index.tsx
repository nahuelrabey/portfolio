/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import { ISkill } from "../components/Skills";
import Header from "../components/Header";
import style from "./Home.module.css";

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
        <section className={style.experiencia}>
          <h2>Experiencia laboral</h2>
          <div className={style.timeline}>
            <article className={style.job}>
              <div className={style.content}>
                <header>
                  <h3>Sistema de datos de mercado</h3>
                  <span>2020-2023</span>
                </header>
                <p>
                  Diseñar e implementar una interfaz de programación para consumir
                  datos de mercado en tiempo real, integrando tres estructuras: i)
                  crawlers de datos, ii) motor de cálculo, iii) API.
                </p>
                <h4>Responsabilidades</h4>
                <ul>
                  <li>
                    Diseñar la comunicación entre los microservicios de las tres
                    estructuras, de forma asíncrona, logrando un sistema de
                    escalado horizontal, garantizando así un crecimiento del
                    sistema junto a la cantidad de clientes de la empresa.
                  </li>
                  <li>
                    Estructurar el repositorio para dar lugar a varios servicios
                    juntos. Al tener una única base de código, las modificaciones
                    de cada miembro se mantienen aisladas y empaquetadas,
                    agilizando la resolución de merge conflicts.
                  </li>
                  <li>
                    Diseñar el proceso de incorporación para cada nuevo servicio.
                    Acelerando así el proceso de adaptación del proyecto a las
                    necesidades del cliente.
                  </li>
                  <li>
                    Diseñar una interfaz GraphQl auto-documentada. Garantizando la
                    claridad semántica, es posible utilizar la API sólo con
                    conocimientos de área, es decir, de análisis financieros,
                    acortando la brecha entre técnicos informáticos y de mercado..
                  </li>
                  <h4>Logros</h4>
                  <span className={style.logro}>
                    Comprimir los contenedores de cada servicio de 2gb a 46mb,
                    utilizando Rollup y separando el proceso de dockerización en
                    varias etapas.
                  </span>
                  <div>
                  <a className={style.demo} href="https://uquant.com.ar" target="_blank" rel="noreferrer">Ver sitio</a>
                  </div>
                </ul>
              </div>
            </article>
            <article className={style.job}>
              <div className={style.content}>
                <header>
                  <h3>Sistema de datos electorales</h3>
                  <span>2019-2020</span>
                </header>
                <p>
                  Crear un sistema que acompañe la logística de afiliaciones en
                  pandemia. El proyecto consistió en una base de datos consumida
                  por dos servicios: i) un formulario online, ii) un sistema de
                  administración.
                </p>

                <h4>Responsabilidades</h4>
                <ul>
                  <li>Implementar la base de datos electorales.</li>
                  <li>
                    Asegurar la seguridad de la información personal de los
                    afiliados.
                  </li>
                  <li>Diseño y programación de la API de datos,</li>
                  <li>
                    Capacitar al equipo de mantenimiento, frontend y logística. De
                    esta forma, la integración de las tres áreas se dio en forma
                    homogénea.
                  </li>
                </ul>

                <h4>Logros</h4>
                <p>
                  El formulario fue completado por más de tres mil personas,
                  logrando un piso para que la organización complete sus objetivos
                  legales.
                </p>
              </div>
            </article>
          </div>

        </section>
        <section className={style.footer}>
          <h2>CONTACT</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            soluta quisquam magni a nisi totam dolores error laboriosam ipsum
            quae expedita consequatur illum, cum, quas sit officia temporibus!
            Fugiat, iste.
          </p>
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
