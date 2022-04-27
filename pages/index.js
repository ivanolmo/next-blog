import Head from 'next/head';

import FeaturedPosts from '../components/home/FeaturedPosts';
import Hero from '../components/home/Hero';
import { getFeaturedPosts } from '../lib/postUtils';

export default function Home({ featuredPosts }) {
  return (
    <div>
      <Head>
        <title>Ivan's blog</title>
        <meta
          name='description'
          content='This is where I post my thoughts about Next.js'
        />
      </Head>
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
