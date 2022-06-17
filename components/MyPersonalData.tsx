import twitterImg from "../public/twitter.png";
import facebookImg from "../public/facebook.png";
import instagramImg from "../public/instagram.png";
import linkedingImg from "../public/linkedin.png";
import myImg from "../public/me.jpeg";
import Image from "next/image";
import styles from "../styles/MyPersonalData.module.scss";

const MyPersonalData: React.FC = () => {
  return (
    <>
      <div className={styles.dataContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>David Vargas Hernández</h1>
          <p className={styles.subtitle}>
            React Developer - Node Developer - Software Engineer - #ReactDev
            #BTC #NodeDev 🇲🇽
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={myImg} alt="David Vargas Hernández" />
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaItem}>
          <div className={styles.logo}>
            <Image src={twitterImg} alt="Twitter" />
          </div>
          <div className={styles.socialMediaInfo}>
            <p className={styles.socialMediaTitle}>Twitter</p>
            <p className={styles.socialMediaSubtitle}>@ItsDavidHdez</p>
          </div>
        </div>
        <div className={styles.socialMediaItem}>
          <div className={styles.logo}>
            <Image src={linkedingImg} alt="Linkedin" />
          </div>
          <div className={styles.socialMediaInfo}>
            <p className={styles.socialMediaTitle}>Linkedin</p>
            <p className={styles.socialMediaSubtitle}>David Vargas</p>
          </div>
        </div>
        <div className={styles.socialMediaItem}>
          <div className={styles.logo}>
            <Image src={instagramImg} alt="Instagram" />
          </div>
          <div className={styles.socialMediaInfo}>
            <p className={styles.socialMediaTitle}>Instagram</p>
            <p className={styles.socialMediaSubtitle}>@itsdavidhdez</p>
          </div>
        </div>
        <div className={styles.socialMediaItem}>
          <div className={styles.logo}>
            <Image src={facebookImg} alt="Facebook" />
          </div>
          <div className={styles.socialMediaInfo}>
            <p className={styles.socialMediaTitle}>Facebook</p>
            <p className={styles.socialMediaSubtitle}>David Vargas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPersonalData;
