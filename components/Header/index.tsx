import Skills, { ISkill } from "../Skills";
import Image from "next/image"
import styles from "./header.module.css"

type params = { skills: ISkill[] }
export default function Header({skills}:params){
    return (
        <header className={styles.header}>
          <div className={styles.hello}>
            <h1>Nahuel Rabey</h1>
            <Skills content={skills} />
          </div>
          <div className={styles.blob}>
            <Image src="/blob.svg" fill alt='animated blob' />
          </div>
        </header>
    )
}