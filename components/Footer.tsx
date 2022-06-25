import styles from "../styles/Home.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p>
          David Vargas Hernández @ItsDavidHdez • Todos los izquierdos reservados{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
