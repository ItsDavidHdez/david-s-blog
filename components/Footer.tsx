import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p style={{ display: "flex" }}>
          Hecho con ❤️ por{" "}
          <Link href="https://github.com/ItsDavidHdez">
            <a>&nbsp;@ItsDavidHdez</a>
          </Link>{" "}
          • {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
