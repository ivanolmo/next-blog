import Link from 'next/link';
import Image from 'next/image';

import classes from './PostItem.module.css';

export default function PostItem({ post }) {
  const { title, image, summary, date, slug } = post;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              layout='responsive'
              width={300}
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{readableDate}</time>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
