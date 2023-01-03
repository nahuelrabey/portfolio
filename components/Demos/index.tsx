import styles from "./demos.module.css"

export function Demos() {
    return (
        <div className={styles.demos}>
            <h3>Demos:</h3>
            <ul>
                <li>
                    <a href="http://unitcircle.nahuelrabey.com/" target='_blank' rel="noreferrer">Unit Circle</a>
                </li>
            </ul>
        </div>
    )
}