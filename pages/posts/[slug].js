import PostContent from '../../components/posts/postDetails/PostContent';
import { getPostData, getAllPosts } from '../../lib/postUtils';

export default function Post({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const slug = context.params.slug;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
