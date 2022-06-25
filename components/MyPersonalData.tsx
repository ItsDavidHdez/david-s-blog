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
        <div className={styles.dataContainer__infoContainer}>
          <h1 className={styles.dataContainer__infoContainer__title}>
            David Vargas Hernández
          </h1>
          <p className={styles.dataContainer__infoContainer__subtitle}>
            React Developer - Node Developer - Software Engineer - #ReactDev
            #BTC #NodeDev 🇲🇽
          </p>
        </div>
        <div className={styles.dataContainer__imgContainer}>
          <Image src={myImg} alt="David Vargas Hernández" />
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaItem}>
          <div className={styles.socialMediaItem__logo}>
            <Image src={twitterImg} alt="Twitter" />
          </div>
          <div className={styles.socialMediaInfo}>
            <p className={styles.socialMediaItem__info__title}>Twitter</p>
            <p className={styles.socialMediaItem__info__subtitle}>
              @ItsDavidHdez
            </p>
          </div>
        </div>
        <div className={styles.socialMediaItem}>
          <div className={styles.socialMediaItem__logo}>
            <Image src={linkedingImg} alt="Linkedin" />
          </div>
          <div className={styles.socialMediaInfo}>
            <p className={styles.socialMediaItem__info__title}>Linkedin</p>
            <p className={styles.socialMediaItem__info__subtitle}>
              David Vargas
            </p>
          </div>
        </div>
        <div className={styles.socialMediaItem}>
          <div className={styles.socialMediaItem__logo}>
            <Image src={instagramImg} alt="Instagram" />
          </div>
          <div className={styles.socialMediaItem__info}>
            <p className={styles.socialMediaItem__info__title}>Instagram</p>
            <p className={styles.socialMediaItem__info__subtitle}>
              @itsdavidhdez
            </p>
          </div>
        </div>
        <div className={styles.socialMediaItem}>
          <div className={styles.socialMediaItem__logo}>
            <Image src={facebookImg} alt="Facebook" />
          </div>
          <div className={styles.socialMediaItem__info}>
            <p className={styles.socialMediaItem__info__title}>Facebook</p>
            <p className={styles.socialMediaItem__info__subtitle}>
              David Vargas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPersonalData;
