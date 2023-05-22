import Link from "next/link";
import styles from "../styles/Tag.module.scss";

interface TagInterface {
  title: string;
}

const Tag = ({ title }: TagInterface) => {
  console.log(title);

  const colorTag = (title: string) => {
    switch (title) {
      case "Desarrollo":
        return "#44C103";
      case "Javascript":
        return "#EFD81D";
      case "React":
        return "#5AD1F3";
      case "Nodejs":
        return "#8BBE3D";
      case "Golang":
        return "#70C8D6";
      case "Finanzas":
        return "#F7B81B";
      case "Marketing Digital":
        return "#0068DF";
      case "Blockchain":
        return "#B5E7B8";
      case "DevOps":
        return "#18851D";
      default:
    }
  };
  return (
    <div
      style={{ backgroundColor: `${colorTag(title)}` }}
      className={styles.container}
    >
      <Link href={`/posts/${title}`}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Tag;
