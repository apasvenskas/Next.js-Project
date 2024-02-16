import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <nav className="nav-main">
        <Link className="community" href="/community">Community</Link>
        <Link className="meals" href="/meals">Meals</Link>
        <Link className="share" href="/meals/share">Share</Link>
      </nav>
    </main>
  );
}
