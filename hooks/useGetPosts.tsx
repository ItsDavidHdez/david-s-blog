const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,html,slug,created_at,excerpt,reading_time,custom_excerpt&include=tags`
  ).then((response) => response.json());

  const posts = res.posts;

  return posts;
}

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,html,slug,created_at,excerpt,reading_time,custom_excerpt&include=tags`
  ).then((response) => response.json());

  const posts = res.posts;

  return posts[0];
}

export { getPosts, getPost };
