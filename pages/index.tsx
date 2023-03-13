/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import { ISkill } from "../components/Skills";
import Header from "../components/Header";
import style from "./Home.module.css";
import Experience from "../components/Experience";

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
        <section className={style.servicesSection}>
          <div className={style.container}>
            <h2>Servicios</h2>
            <div className={style.services}>
              <article className={style.service}>
                <h3>Web Estática</h3>
                <div>
                  <h4>Sirve para mostrar</h4>
                  <ul>
                    <li>Detalles y precios de servicios</li>
                    <li>Forma de trabajo</li>
                    <li>Experiencia laboral</li>
                    <li>Información de contacto</li>
                  </ul>
                </div>
                <div>
                  <h4>Necesario si sos</h4>
                  <ul>
                    <li>Técnico</li>
                    <li>Profesional</li>
                    <li>Empresas de servicios</li>
                  </ul>
                </div>
                <div>
                  <h4>Precio</h4>
                  <table className={style.prices}>
                    <tr>
                      <td>Seña</td>
                      <td className={style.cost}>15000 AR$</td>
                    </tr>
                    <tr>
                      <td>Cada página</td>
                      <td className={style.cost}>15000 AR$</td>
                    </tr>
                    <tr>
                      <td>Hosting + Domino</td>
                      <td className={style.cost}>5000 AR$</td>
                    </tr>
                  </table>
                </div>
              </article>
              <article className={style.service}>
                <h3>Web Dinámica</h3>
                <div>
                  <h4>Sirve para mostrar</h4>
                  <ul>
                    <li>Productos y sus precios</li>
                    <li>Noticias y artículos</li>
                    <li>Interacción con el usuario</li>
                  </ul>
                </div>
                <div>
                  <h4>Necesario para</h4>
                  <ul>
                    <li>Tiendas</li>
                    <li>Medios</li>
                    <li>Influencers</li>
                  </ul>
                </div>
                <div>
                  <h4>Precio</h4>
                  <table className={style.prices}>
                    <tr>
                      <td>Seña</td>
                      <td className={style.cost}>50000 AR$</td>
                    </tr>
                    <tr>
                      <td>Objetivo</td>
                      <td className={style.cost}>25000 AR$</td>
                    </tr>
                    <tr>
                      <td>
                        Hosting + Domino <br />
                        (inicial)
                      </td>
                      <td className={style.cost}>10000 AR$</td>
                    </tr>
                  </table>
                </div>
              </article>
              <article className={style.service}>
                <h3>Data Dashboards</h3>
                <div>
                  <h4>Sirve para mostrar</h4>
                  <ul>
                    <li>Estadísitcas</li>
                    <li>Análisis técnico</li>
                    <li>Modelos</li>
                  </ul>
                </div>
                <div>
                  <h4>Necesario para</h4>
                  <ul>
                    <li>Brokers</li>
                    <li>Consultores</li>
                    <li>Fondos de inversión</li>
                  </ul>
                </div>
                <div>
                  <h4>Precio</h4>
                  <table className={style.prices}>
                    <tr>
                      <td>Seña</td>
                      <td className={style.cost}>500 USD</td>
                    </tr>
                    <tr>
                      <td>Objetivo</td>
                      <td className={style.cost}>500 USD</td>
                    </tr>
                    <tr>
                      <td>
                        Hosting + Domino <br />
                        (inicial)
                      </td>
                      <td className={style.cost}>100 USD</td>
                    </tr>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </section>
        <Experience />
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
