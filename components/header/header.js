import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./header.module.css"; //difrent way of importing module specifc css, by the use of classname.specific
// import HeaderBackground from "./main-header";

export default function MainHeader() {
  return (
    <>
      {/* <HeaderBackground /> */}
      <header className={styles.headerMain}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="plate with food" priority />
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
    </>
  );
}
