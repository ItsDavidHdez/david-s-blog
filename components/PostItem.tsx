import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useDate } from "../hooks/useDate";

interface Props {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: Tags;
  readingTime: number;
}

type Tags = Tag[];

type Tag = {
  tags: string;
  name: string;
};

const Footer: React.FC<Props> = ({
  title,
  slug,
  date,
  excerpt,
  tags,
  readingTime,
}: Props) => {
  const newDate = new Date(date);

  const getDay = newDate.getDate();
  const getMonth = newDate.getMonth() + 1;
  const getYear = newDate.getFullYear();

  const tagRender = tags.map((tag) => {
    return tag.name;
  });

  console.log(tagRender);

  return (
    <div className={styles.postContainer}>
      <p className={styles.postContainer__date}>
        {useDate(getDay, getMonth, getYear)} ·{" "}
        {readingTime === 0 ? 1 : readingTime} Min ⏳
      </p>
      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <a className={styles.postContainer__title}>{title}</a>
      </Link>
      <div>
        {tagRender.map((tag, key) => (
          <p key={key} className={styles.postContainer__tags}>
            {tag}&nbsp; &nbsp;
          </p>
        ))}
      </div>

      <p className={styles.postContainer__info}>
        {excerpt
          ? excerpt
          : "Soy medio idiota y olvidé poner un texto inicial por aquí, pero eso no le quita lo interesante al post 😅"}
      </p>
    </div>
  );
};

export default Footer;
