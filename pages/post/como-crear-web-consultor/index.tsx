// import { GetStaticProps } from "next";
import style from "./style.module.css";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IBM_Plex_Sans, Inter } from "@next/font/google";
import Footer from "../../../components/Footer";
import Head from "next/head";
import Menu from "../../../components/Menu";
import Post from "../Post";

const text = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
});
const headline = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});
export default function Article() {
  return (
    <>
      <Post image="/images/website.jpg" title="¿Cómo es una web efectiva para un consultor?">
        <h1>¿Qué página web es efectiva para un consultor? </h1>
        <p>
          Si sos consultor, necesitas una página web que muestre tu experiencia,
          credibilidad y propuesta de valor, y que además atraiga y convierta
          clics en ventas. En este post te presento algunas características que
          puedes incluir en ella.
        </p>

        <h2>Un título claro y convincente</h2>
        <p>
          Debe resumir lo que haces de una forma llamativa, indicar cuál es el
          valor agregado que da tu servicio y, sobre todas las cosas, tener un
          llamado a la acción!
        </p>
        <div className={style.example}>
          <div className={style.headline}>
            <iframe
              src="https://wr3xou.csb.app/"
              scrolling="no"
              className={style.sandbox}
            ></iframe>
          </div>
        </div>

        <h2>Una breve presentación</h2>
        <p>
          Debe decir quién sos, cual es tu trayectoria y tu experiencia. Sin
          embargo, no debe ser algo muy largo, es recomendable tener una página
          independiente &quot;Sobre Mi&quot; dónde haya información más
          detallada
        </p>
        <div className={style.example}>
          <div className={style.desc}>
            <iframe
              className={style.sandbox}
              src="https://wr3xou.csb.app/desc.html"
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <h2>Una lista de servicios</h2>

        <p>
          Las soluciones que das, con beneficios y testimonios de clientes
          anteriores. Debe incluir una breve descripción que apunte a las
          necesidades que resuelve.
        </p>

        <div className={style.example}>
          <div className={style.services}>
            <iframe
              className={style.sandbox}
              src="https://wr3xou.csb.app/service.html"
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <h2>Un portfolio</h2>
        <p>
          trabajos o casos de estudio que demuestren tus resultados e impacto en
          los negocios de tus clientes
        </p>
        <div className={style.example}>
          <div className={style.portfolio}>
            <iframe
              className={style.sandbox}
              src="https://wr3xou.csb.app/portfolio.html"
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </Post>
      {/* <Head>
        <title>¿Qué página web es efectiva para un consultor?</title>
        <meta
          name="description"
          content="En este post vas a encontrar qué elementos necesita la web de un consultor"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/B3DP3YV/post1.png"
        />
      </Head>
      <Menu /> */}
      {/* <section style={text.style}>
        <h1 className={style.title}>
          ¿Qué página web es efectiva para un consultor?{" "}
        </h1>
        <p className={style.parr}>
          Si sos consultor, necesitas una página web que muestre tu experiencia,
          credibilidad y propuesta de valor, y que además atraiga y convierta
          clics en ventas. En este post te presento algunas características que
          puedes incluir en ella.
        </p>

        <div className={style.tip}>
          <h2>Un título claro y convincente</h2>
          <p className={style.parr}>
            Debe resumir lo que haces de una forma llamativa, indicar cuál es el
            valor agregado que da tu servicio y, sobre todas las cosas, tener un
            llamado a la acción!
          </p>
          <div className={style.example}>
            <div className={style.headline}>
              <iframe
                src="https://wr3xou.csb.app/"
                scrolling="no"
                className={style.sandbox}
              ></iframe>
            </div>
          </div>
        </div>

        <div className={style.tip}>
          <h2>Una breve presentación</h2>
          <p className={style.parr}>
            Debe decir quién sos, cual es tu trayectoria y tu experiencia. Sin
            embargo, no debe ser algo muy largo, es recomendable tener una
            página independiente &quot;Sobre Mi&quot; dónde haya información más
            detallada
          </p>
          <div className={style.example}>
            <div className={style.descExample}>
              <iframe
                className={style.sandbox}
                src="https://wr3xou.csb.app/desc.html"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>

        <div className={style.tip}>
          <h2>Una lista de servicios</h2>

          <p className={style.parr}>
            Las soluciones que das, con beneficios y testimonios de clientes
            anteriores. Debe incluir una breve descripción que apunte a las
            necesidades que resuelve.
          </p>

          <div className={style.example}>
            <div className={style.serviceExample}>
              <iframe
                className={style.sandbox}
                src="https://wr3xou.csb.app/service.html"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

        </div>

        <div className={style.tip}>
          <h2>Un portfolio</h2>
          <p className={style.parr}>
            trabajos o casos de estudio que demuestren tus resultados e impacto
            en los negocios de tus clientes
          </p>
          <div className={style.example}>
            <div className={style.portfolioExample}>
              <iframe
                className={style.sandbox}
                src="https://wr3xou.csb.app/portfolio.html"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>

        <Footer />
      </section> */}
    </>
  );
}

// export const getStaticProps: GetStaticProps<params> = async (context) => {
//     return ({
//         props: {
//             content:""
//         }
//     })
// }
