import style from "./Services.module.css";

export default function Services() {
  return (
    <section className={`${style.servicesSection}`}>
      <div className={`${style.container} Content`}>
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
            {/* <div>
              <h4>Precio</h4>
              <table className={style.prices}>
                <tbody>
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
                </tbody>
              </table>
            </div> */}
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
            {/* <div>
              <h4>Precio</h4>
              <table className={style.prices}>
                <tbody>
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
                </tbody>
              </table>
            </div> */}
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
            {/* <div>
              <h4>Precio</h4>
              <table className={style.prices}>
                <tbody>
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
                </tbody>
              </table>
            </div> */}
          </article>
        </div>
      </div>
    </section>
  );
}
