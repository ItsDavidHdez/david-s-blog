import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import LeftContent from "../../components/LeftContent";
import { getPost } from "../../hooks/useGetPosts";

type Post = {
  title: string;
  html: string;
  slug: string;
  tags: Tags[];
};

type Tags = {
  tags: string;
  name: string;
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;

  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true);

  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  function loadComments(event: React.MouseEvent<HTMLButtonElement>) {
    setEnableLoadComments(false);
    (window as any).disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = post.slug;
    };

    const script = document.createElement("script");
    script.src = "https://ghostcms-nextjs.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());

    document.body.appendChild(script);
  }

  console.log(post);

  return (
    <div className={styles.container}>
      <h1 className={styles.titlePost}>{post.title}</h1>
      <div className={styles.contentContainer}>
        <LeftContent tags={post.tags} />
        <div>
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>
      </div>
      <div className={styles.comments}>
        {enableLoadComments && (
          <Button
            textRender="Load Comments"
            handleClick={loadComments}
            size="md"
          />
        )}
      </div>
      <div id="disqus_thread"></div>
    </div>
  );
};

export default Post;
