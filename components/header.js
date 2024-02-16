import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./header.module.css"; //difrent way of importing module specifc css, by the use of classname.specific

export default function MainHeader(){
    return <header className={styles.header}>
        <Link className={styles.logo} href="/">
            <img src={logoImg.src} alt="plate with food"/>
            Next Level Food
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}