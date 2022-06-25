import styles from "../styles/Home.module.scss";
import Link from "next/link";

interface ButtonInterface {
  textRender: string;
  handleClick: (event: any) => void;
  size: string;
  redirect?: string;
}

const Button = ({
  textRender,
  handleClick = () => {},
  size,
  redirect,
}: ButtonInterface) => {
  const handleSize = () => {
    if (size === "sm") {
      return styles.principalButton__sm;
    } else if (size === "md") {
      return styles.principalButton__md;
    } else if (size === "lg") {
      return styles.principalButton__lg;
    }
  };

  return (
    <>
      {redirect ? (
        <div className={styles.containerButton}>
          <Link href={redirect}>
            <a
              className={`${styles.principalButton} ${handleSize()}`}
              onClick={handleClick}
            >
              {textRender}
            </a>
          </Link>
        </div>
      ) : (
        <button
          className={`${styles.principalButton} ${handleSize()}`}
          onClick={handleClick}
        >
          {textRender}
        </button>
      )}
    </>
  );
};
export default Button;
