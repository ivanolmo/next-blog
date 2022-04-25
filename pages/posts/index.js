import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/postUtils';

export default function AllPostsPage({ allPosts }) {
  return <AllPosts posts={allPosts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
