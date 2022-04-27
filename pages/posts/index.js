import Head from 'next/head';

import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/postUtils';

export default function AllPostsPage({ allPosts }) {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name='description'
          content='Here are all my Next.js and programming related posts'
        />
      </Head>
      <AllPosts posts={allPosts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
