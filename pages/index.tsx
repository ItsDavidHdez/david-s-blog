import MyPersonalData from "../components/MyPersonalData";
import PostItem from "../components/PostItem";
import styles from "../styles/Home.module.scss";
import { getPosts } from "../hooks/useGetPosts";
import Newsletter from "../components/Newsletter";

type Post = {
  title: string;
  slug: string;
  created_at: string;
  custom_excerpt: string;
  tags: Tags[];
  reading_time: number;
};

type Tags = {
  tags: string;
  name: string;
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    revalidate: 10,
    props: { posts },
  };
};

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    <div className={styles.container}>
      <MyPersonalData />
      <h2 className={styles.container__titleHome}>¿Hoy que aprenderás?</h2>
      <p>📰 Artículos más recientes</p>
      <div className={styles.containerHome}>
        <div>
          {posts.map((post, key) => (
            <PostItem
              key={key}
              title={post.title}
              slug={post.slug}
              date={post.created_at}
              excerpt={post.custom_excerpt}
              tags={post.tags}
              readingTime={post.reading_time}
            />
          ))}
        </div>

        <div>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
