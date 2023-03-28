import styles from "./Menu.module.css"
import Link from "next/link";
import { Inter } from "@next/font/google";

const text = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "500", "600"],
});
export default function Menu(){
    return (
        <header className={styles.menu} style={text.style}>
            <Link href="/" className={styles.item}>home</Link>
        </header>
    )
}