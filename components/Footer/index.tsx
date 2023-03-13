import style from "./Footer.module.css"
import { BsWhatsapp, BsTwitter, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <section className={style.footer}>
      <div className={style.content}>
        <h2>Contacto</h2>
        <p>
          Internet y la teconología pueden ser abrumadoras. En caso de necesitar
          asesoría para, o el desarrollo completo, de un proyecto que tengas en
          mente, podemos coordinar una primer llamada sin costo. ¡Mucha suerte!
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
  );
}
