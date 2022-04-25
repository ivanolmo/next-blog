import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

export default function PostContent({ post }) {
  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
