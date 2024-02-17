"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <li>
      {/* will add a clasname to show if the page is selected or not */}
      <Link
        href={href}
        className={path.startsWith(href) ? styles.active : undefined}
      >
        {children}
      </Link>
    </li>
  );
}
