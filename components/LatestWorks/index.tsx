import Link from "next/link";
import style from "./style.module.scss";
import Image from "next/image";
export default function LatestWorks() {
  return (
    <section className={`Content ${style.LatestWorks}`}>
      <h2>Últimos trabajos</h2>
      <div className={style.pesos}>
        <article>
          <Link href="https://biosufert.com/" className={style.link}>
            <div className={style.imgwrapper}>
              <Image
                alt="biosufert sitio web captura de pantalla"
                src="/images/websites/biosufert-website-screenshot.png"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.header}>
              <h3>Biosufert</h3>
              <h4>Una empresa bio ñuble</h4>
            </div>
          </Link>
        </article>
        <article>
          <Link href="https://ott-ingenieria.cl/" className={style.link}>
            <div className={style.imgwrapper}>
              <Image
                alt="ott sitio web captura de pantalla"
                src="/images/websites/ott-website-screenshot.png"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.header}>
              <h3>OTT-Ingeñería</h3>
              <h4>Mantenimiento Industrial</h4>
            </div>
          </Link>
        </article>
        <article>
          <Link href="https://www.uquant.com.ar/" className={style.link}>
            <div className={style.imgwrapper}>
              <Image
                alt="uquant sitio web captura de pantalla"
                src="/images/websites/uquant-website-screenshot.png"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.header}>
              <h3>uQuant</h3>
              <h4>Datos del Mercado Argentino en Tiempo Real</h4>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
