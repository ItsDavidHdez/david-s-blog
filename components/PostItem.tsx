import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useDate } from "../hooks/useDate";
import Image from "next/image";
import { useGetMinutesForMinute } from "../hooks/useGetMinutesForMinute";

interface Props {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: Authors;
  content: string;
}

type Authors = {
  picture: string;
  name: string;
};

const PostItem: React.FC<Props> = ({
  title,
  slug,
  date,
  excerpt,
  coverImage,
  author,
  content,
}: Props) => {
  const newDate = new Date(date);

  const getDay = newDate.getDate();
  const getMonth = newDate.getMonth() + 1;
  const getYear = newDate.getFullYear();

  return (
    <Link
      href="/post/[slug]"
      as={`/post/${slug}`}
      className={styles.postContainer}
    >
      <a>
        <div
          style={{
            width: "100%",
          }}
        >
          <Image
            src={coverImage}
            alt={title}
            width="1000"
            height="600px"
            objectFit="cover"
          />
        </div>
        <p className={styles.postContainer__date}>
          {useDate(getDay, getMonth, getYear)} ·{" "}
          {useGetMinutesForMinute(content)} Min ⏳
        </p>
        <p className={styles.postContainer__title}>{title}</p>
        <p className={styles.postContainer__info}>
          {excerpt
            ? excerpt
            : "Soy medio idiota y olvidé poner un texto inicial por aquí, pero eso no le quita lo interesante al post 😅"}
        </p>
        <div className={styles.postContainer__authorContainer}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={author.picture}
              alt={author.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={styles.postContainer__authorContainer__name}>
            {author.name}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default PostItem;
