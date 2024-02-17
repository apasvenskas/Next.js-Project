import Link from "next/link";
import styles from "./page.module.css"
import ImageSlideshow from "@/components/header/images/images-slideshow";

export default function Home() {
  return (
    <>
      <section className={styles.headerBody}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Next Level Food for the Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={styles.cta}>
            <Link className="community" href="/community">Join the Community</Link>
            <Link className="meals" href="/meals">Explore the Meals</Link>
          </div>
        </div>
      </section>
      <main>
      <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
    // <main>
    //   <h1 style={{ color: 'white', textAlign: 'center' }}>
    //     Time to get started!
    //   </h1>
    //   <nav className="nav-main">
    //     <Link className="community" href="/community">Community</Link>
    //     <Link className="meals" href="/meals">Meals</Link>
    //     <Link className="share" href="/meals/share">Share</Link>
    //   </nav>
    // </main>
  );
}
