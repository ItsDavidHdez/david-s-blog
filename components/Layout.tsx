import styles from "../styles/Home.module.scss";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
