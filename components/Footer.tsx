import styles from "../styles/Home.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        David Vargas Hernández @ItsDavidHdez • Todos los izquierdos reservados{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
