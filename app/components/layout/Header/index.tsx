import "./Header.css";
import clsx from "clsx";
import Link from "next/link";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx("header", className)}>
      <Link href="/">
        <h1 className="logo">{"Freakin' Geek"}</h1>
      </Link>

      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="/" className="navigation__link">
              home
            </Link>
          </li>

          <li className="navigation__item">
            <Link href="/blog" className="navigation__link">
              blog
            </Link>
          </li>

          <li className="navigation__item">
            <Link href="/about" className="navigation__link">
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
