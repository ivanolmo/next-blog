import PostHeader from './PostHeader';

import classes from './PostContent.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs4',
  title: 'Getting Started With Next.js',
  image: 'getting-started-nextjs.png',
  content:
    '# Next.js is a React framework for production ## it makes building full stack React applications a breeze, and comes with built-in features like Server Side Rendering.',
  date: '2022-01-15',
};
export default function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      {DUMMY_POST.content}
    </article>
  );
}
