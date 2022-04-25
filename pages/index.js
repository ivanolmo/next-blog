import FeaturedPosts from '../components/home/FeaturedPosts';
import Hero from '../components/home/Hero';
import { getFeaturedPosts } from '../lib/postUtils';

export default function Home({ featuredPosts }) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}
