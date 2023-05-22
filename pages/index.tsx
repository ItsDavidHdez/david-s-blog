import MyPersonalData from "../components/MyPersonalData";
import PostItem from "../components/PostItem";
import styles from "../styles/Home.module.scss";
import { getAllPosts } from "../lib/api";

const Home = ({ allPosts }) => {
  return (
    <div className={styles.container}>
      <MyPersonalData />
      <h2 className={styles.container__titleHome}>¿Hoy que aprenderás?</h2>
      <p>📰 Artículos más recientes</p>
      <div className={styles.containerHome}>
        {allPosts.map((post, key) => (
          <PostItem
            key={key}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            content={post.content}
            tag={post.tag}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
    "tag",
  ]);

  return {
    props: { allPosts },
  };
}

export default Home;
