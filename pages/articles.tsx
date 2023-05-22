import React, { useState } from "react";
import styles from "../styles/Articles.module.scss";
import PostItem from "../components/PostItem";
import { getAllPosts } from "../lib/api";
import InputSearch from "../components/InputSearch";

const Articles = ({ allPosts }) => {
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState(allPosts);

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterDatas(e.target.value);
  };

  const filterDatas = (search: string) => {
    const resultSearch = allPosts.filter((element) => {
      if (
        element.title.toString().toLowerCase().includes(search.toLowerCase())
      ) {
        console.log(element);
        return element;
      }
    });
    setDataSearch(resultSearch);
  };

  console.log("tag", dataSearch);

  return (
    <div className={styles.container}>
      <InputSearch handleChange={handleChange} />

      {dataSearch.length >= 1 ? (
        <div className={styles.containerHome}>
          {dataSearch.map((post, key) => (
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
      ) : (
        <div className={styles.withoutResults}>
          <p>No se encontró ningún resultado 🥲</p>
        </div>
      )}
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
  ]);

  return {
    props: { allPosts },
  };
}

export default Articles;
