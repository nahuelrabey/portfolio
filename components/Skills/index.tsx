import { useEffect, useRef, useState } from "react"
import styles from "./Skills.module.css"

export type ISkill = { title: string, catchPhrase: string }
type params = { content: ISkill[] }
export default function Skills({ content }: params) {
    const skillSets = content.map(({ catchPhrase, title }, index) => (
        <div key={index} className={styles.skillSets}>
            <h2>{title}</h2>
            <span className={styles.catchPhrase}>{catchPhrase}</span>
        </div>
    ))

    const index = useRef(0)
    const [currentSkill, setSkill] = useState(skillSets[0])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("initial", index.current)
            if (index.current >= content.length -1) {
                index.current = 0;
            }
            else {
                index.current += 1;
            }
            setSkill(() => skillSets[index.current])
        }, 4000)

        return () => { clearInterval(interval) }
    }, [content.length, skillSets])

    return <div>{currentSkill}</div>
}