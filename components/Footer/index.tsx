import style from "./Footer.module.css";
// import * as Tooltip from "@radix-ui/react-tooltip";
import { BsWhatsapp, BsTwitter, BsLinkedin } from "react-icons/bs";
import mobile from "is-mobile";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Footer() {
  return (
    // <section className={style.footer} >
    <section className={style.footer} style={inter.style}>
      <div className={style.content}>
        <h2>Contacto</h2>
        <p>
          Internet y la teconología pueden ser abrumadoras. En caso de necesitar
          asesoría para (o el desarrollo completo) de un proyecto que tengas en
          mente, podemos coordinar una primer llamada sin costo. ¡Mucha suerte!
        </p>
        <div className={style.contact}>
          <div className={style.personal}>
            <PhoneNumber />
            <DirectContact>nahuelrabeywork@gmail.com</DirectContact>
          </div>
          <div className={style.networks}>
            <a
              className={style.social}
              href="https://www.linkedin.com/in/nahuel-rabey-260857180/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              className={style.social}
              href="https://twitter.com/rabey_n"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter color="white" />
            </a>
            <a
              className={style.social}
              href="https://wa.me/5491132134807?text=Hola%2C%20me%20gustar%C3%ADa%20contratar%20un%20servicio%20web!"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneNumber() {
  const [isMobile, setMobile] = useState(mobile());
  const [Contact, setContact] = useState<JSX.Element>(<></>);

  useEffect(() => {
    setMobile(mobile());
    if (isMobile) {
      setContact(<DirectContact>+59 11-3213-4807</DirectContact>);
    }else{
      setContact(<DirectContact>+59 11-3213-4807</DirectContact>)
    }
  }, [isMobile]);
  return Contact
}

type params = { children: string };
function DirectContact({ children }: params) {
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <button className={style.directContact} onClick={() => copyContent()}>
      {children}
    </button>
  );
}
