import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link href="/" className={styles.header__content__logo}>
          <a>David Vargas Hernández</a>
        </Link>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/">
                <a
                  className={styles.header__content__nav__a}
                  onClick={menuToggleHandler}
                >
                  Inicio
                </a>
              </Link>
            </li>
            <li>
              <Link href="/post/quien-es-david-vargas-hernandez">
                <a
                  className={styles.header__content__nav__a}
                  onClick={menuToggleHandler}
                >
                  Acerca
                </a>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <a
                  className={styles.header__content__nav__a}
                  onClick={menuToggleHandler}
                >
                  Artículos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a
                  className={styles.header__content__nav__a}
                  onClick={menuToggleHandler}
                >
                  Proyectos
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
