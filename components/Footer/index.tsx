import style from "./Footer.module.css";
// import * as Tooltip from "@radix-ui/react-tooltip";
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
          <a className={style.social} href="https://www.linkedin.com/in/nahuel-rabey-260857180/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a className={style.social} href="https://twitter.com/rabey_n" target="_blank" rel="noreferrer">
            <BsTwitter color="white" />
          </a>
          <a className={style.social} href="https://wa.me/5491132134807?text=Hola%2C%20me%20gustar%C3%ADa%20contratar%20un%20servicio%20web!" target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a>

          <DirectContact>+59 11-3213-4807</DirectContact>
          <DirectContact>nahuelrabeywork@gmail.com</DirectContact>
        </div>
      </div>
    </section>
  );
}

type params = { children: string };
function DirectContact({ children }: params) {
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(children);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return <button className={style.directContact} onClick={()=>copyContent()}>{children}</button>;
}
