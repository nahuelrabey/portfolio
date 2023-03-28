import { Inter } from "@next/font/google";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import Image from "next/image";
import style from "./Post.module.scss";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export default function Post() {
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
            src="/images/money.jpg"
            alt="Money image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={style.content}>
          <h1>¿Porqué contratar un desarrollador web?</h1>

          <p>
            ¿Estás pensando en crear una página web para tu negocio, proyecto o
            hobby? ¿Te planteaste hacerlo tú mismo con alguna de las plataformas
            gratuitas que existen en internet? ¿O estás buscando un profesional
            que se encargue de todo el proceso? Si todavía no lo tenés claro, te
            voy a dar algunas razones por las que creo que es mejor contratar a
            un desarrollador web para hacer el trabajo.
          </p>

          <h2>1. Ahorrarás tiempo y dinero.</h2>

          <p>
            Aunque parezca contradictorio, contratar a un profesional te puede
            salir más barato que hacerlo tú mismo. Piensa en todo el tiempo que
            tendrías que invertir en aprender a usar una plataforma, elegir una
            plantilla, personalizarla, añadir el contenido, optimizarla para los
            buscadores, etc.
          </p>

          <p>
            Ese tiempo podrías dedicarlo a otras tareas más productivas. Además,
            un profesional te garantiza un resultado de calidad, con menos
            errores y problemas técnicos que puedan afectar a la imagen de tu
            emprendimiento.
          </p>

          <h2>2. Tendrás una página web única y original.</h2>

          <p>
            Una de las desventajas de usar una plataforma gratuita es que tu
            página web se parecerá a muchas otras que usan la misma plantilla o
            el mismo diseño. Eso puede restarle personalidad y diferenciación a
            tu proyecto.
          </p>

          <p>
            En cambio,{" "}
            <strong>
              si contratas a un desarrollador web podrás tener una página web a
              medida
            </strong>
            , adaptada a tus necesidades, gustos y objetivos. Podrás elegir los
            colores, las fuentes, las imágenes, los elementos interactivos y
            todo lo que se te ocurra para{" "}
            <strong>
              crear una página web que refleje tu esencia y tu valor añadido.
            </strong>
          </p>

          <h2>3. Mejorarás la experiencia de usuario y la conversión. </h2>

          <p>
            Una página web no solo tiene que ser bonita, sino también funcional
            y fácil de usar. Un profesional sabrá cómo estructurar la
            información, cómo crear un menú intuitivo, cómo hacer que la
            navegación sea fluida y rápida, cómo adaptar la página web a todos
            los dispositivos y tamaños de pantalla, cómo incorporar llamadas a
            la acción y formularios de contacto, etc. Todo ello contribuirá a
            mejorar la experiencia de usuario y a aumentar las posibilidades de
            que los visitantes se conviertan en clientes o seguidores.
          </p>

          <h2>4. Te beneficiarás del asesoramiento y el soporte técnico. </h2>

          <p>
            Otra ventaja de contratar a un profesional es que{" "}
            <strong>
              no estarás solo en el proceso de creación de tu página web
            </strong>
            . Podrás contar con su asesoramiento y su experiencia para resolver
            cualquier duda o problema que surja.
          </p>

          <p>
            Además, tendrás la tranquilidad de saber que tu página web estará
            siempre actualizada, segura y protegida frente a posibles ataques o
            fallos. Un profesional te ofrecerá un servicio de mantenimiento y
            soporte técnico que ahorrará muchos dolores de cabeza.
          </p>

          <p>
            Como ves, contratar a un desarrollador web para hacer
            una página web tiene muchas ventajas que pueden compensar con creces
            la inversión inicial. Si quieres tener una página web profesional,
            única y eficaz, no lo dudes y ponte en contacto conmigo. Te haré un
            presupuesto sin compromiso y te ayudaré a crear la página web de tus
            sueños.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
