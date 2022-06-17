import styles from "../styles/Home.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Inicio</li>
        <li>Acerca</li>
        <li>Articulos</li>
      </ul>
    </div>
  );
};

export default Header;
