import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./header.module.css"; //difrent way of importing module specifc css, by the use of classname.specific
import NavLink from "./navLink";

// import HeaderBackground from "./main-header";

export default function MainHeader() {
  // aditional import for active header link
  
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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community" >Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
