import FeaturedPosts from '../components/home/FeaturedPosts';
import Hero from '../components/home/Hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    content:
      'Next.js is a React framework for production - it makes building full stack React applications a breeze, and comes with built-in features like Server Side Rendering.',
    date: '2022-01-15',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    content:
      'Next.js is a React framework for production - it makes building full stack React applications a breeze, and comes with built-in features like Server Side Rendering.',
    date: '2022-01-15',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    content:
      'Next.js is a React framework for production - it makes building full stack React applications a breeze, and comes with built-in features like Server Side Rendering.',
    date: '2022-01-15',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    content:
      'Next.js is a React framework for production - it makes building full stack React applications a breeze, and comes with built-in features like Server Side Rendering.',
    date: '2022-01-15',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}
