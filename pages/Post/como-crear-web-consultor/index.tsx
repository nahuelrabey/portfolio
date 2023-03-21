// import { GetStaticProps } from "next";
import style from "./style.module.css";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IBM_Plex_Sans, Inter } from "@next/font/google";

const text = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
});
const headline = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});
export default function Post() {
  return (
    <section style={text.style}>
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
          <div className={style.titleExample} style={headline.style}>
            {/* <span className={style.name}>William y Asociados</span> */}
            <div className={style.wrap}>
              <div className={style.headline}>
                <span>
                  Todo lo que necesitas <FaStar className={style.icon} /> para
                  conseguir clientes y aumentar tus ventas{" "}
                  <BsGraphUpArrow className={style.icon} />
                </span>
              </div>
              <button className={style.callToAction}>
                agendá tu consulta!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.tip}>
        <h2>Una breve presentación</h2>
        <p className={style.parr}>
          Debe decir quién sos, cual es tu trayectoria y tu experiencia. Sin
          embargo, no debe ser algo muy largo, es recomendable tener una página
          independiente &quot;Sobre Mi&quot; dónde haya información más
          detallada
        </p>
        <div className={style.example}>
          <div className={style.descExample}>
            {/* <p>
              Soy consultor de marketing digital con más de 10 años de
              experiencia en el sector. He trabajado con clientes de diferentes
              países e industrias, cómo X e Y, ayudándoles a diseñar e
              implementar estrategias efectivas para aumentar su visibilidad,
              tráfico y ventas en internet
            </p> */}
            <div className={style.content}>
              <ul>
                <li>
                  <Image
                    alt="empresa falsa"
                    src="/fake_enterprise/logoipsum-a.svg"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </li>
                <li>
                  <Image
                    alt="empresa falsa"
                    src="/fake_enterprise/logoipsum-b.svg"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </li>
                <li>
                  <Image
                    alt="empresa falsa"
                    src="/fake_enterprise/logoipsum-c.svg"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </li>
                <li>
                  <Image
                    alt="empresa falsa"
                    src="/fake_enterprise/logoipsum-d.svg"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </li>
              </ul>

              <p>
                Hace 10 años que estas empresas confían en mis servicios para
                mejorar sus ventas online
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.tip}>
        <h2>Una lista de servicios</h2>

        <p>
          Las soluciones que das, con beneficios y testimonios de clientes
          anteriores. No es recomendable poner precios porque puede no reflejar
          la realidad del trabajo, y también evita que se comuniquen con
          nosotros. Sí se recomienda una breve descripción que apunte a las
          necesidades que resuelve.
        </p>
        <p>
          Auditoría web: Analizo tu página web y te doy recomendaciones para
          mejorarla en aspectos técnicos, de diseño, de contenido y de
          conversión.
        </p>

        {/* comentario de usario ejemplo */}
        <div>
          <span>Nico</span>
          <p>
            Es un gran profesional, muy atento y cercano. Siempre está
            disponible para resolver cualquier duda o problema que surja. Estoy
            muy contento con su servicio y lo recomiendo al 100%
          </p>
        </div>
      </div>

      <div className={style.tip}>
        <h2>
          Una sección de portfolio o casos de estudio que demuestren tus
          resultados e impacto en los negocios de tus clientes
        </h2>
      </div>
    </section>
  );
}

// export const getStaticProps: GetStaticProps<params> = async (context) => {
//     return ({
//         props: {
//             content:""
//         }
//     })
// }
