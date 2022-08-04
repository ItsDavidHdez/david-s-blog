import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import LeftContent from "../../components/LeftContent";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "../../styles/markdown-styles.module.scss";

const Post = ({ post }) => {
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
  return (
    <div className={styles.container}>
      <h1 className={styles.titlePost}>{post.title}</h1>
      <div className={styles.contentContainer}>
        <LeftContent />
        <div className={styles.htmlContent}>
          <div
            className={(styles.html, markdownStyles["markdown"])}
            dangerouslySetInnerHTML={{ __html: post.content }}
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

interface PostPaths {
  slug: string;
}

export async function getStaticProps({ params }) {
  const post: any = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post: PostPaths) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
