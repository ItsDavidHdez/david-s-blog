import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import meImg from "../public/me.jpeg";
import styles from "../styles/LeftContent.module.scss";
import BuyMeACoffeeButton from "../components/BuyMeACoffeeButton";

interface Props {
  tags: Tags;
}

type Tags = Tag[];

type Tag = {
  tags: string;
  name: string;
};

const LeftContent: React.FC<Props> = ({ tags }) => {
  return (
    <div>
      <div className={styles.myData}>
        <div className={styles.myData__profilePicture}>
          <Image src={meImg} alt="David Vargas Hernández" />
        </div>
        <div className={styles.myData__info}>
          <p>David Vargas</p>
          <Link href="https://www.instagram.com/itsdavidhdez/">
            <a>@itsdavidhdez</a>
          </Link>
        </div>
      </div>
      <Newsletter />
      <div>
        <p></p>
        <BuyMeACoffeeButton />
      </div>
    </div>
  );
};
export default LeftContent;
