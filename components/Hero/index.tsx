import { fontsClass } from "../../libs/fonts";
import Skills, { ISkill } from "../Skills";
// import Image from "next/image"
import styles from "./hero.module.scss"
// import {} from "../../libs/fonts"

type params = { skills: ISkill[] }
export default function Hero({skills}:params){
    return (
        <section className={`${styles.Hero} ${fontsClass}`}>
          <div className={styles.Headline}>
            <h1>Desarrollo Web en Argentina y Chile</h1>
            <span>
              Usando las mejores tecnologías para cumplir los objetivos de tu proyecto.
            </span>
          </div>
        </section>
    )
}