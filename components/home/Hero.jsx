import Image from 'next/image';

import classes from './Hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ivan.png'
          alt='A picture of Ivan.'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ivan</h1>
      <p>I blog about things like React and Next.js because why not?</p>
    </section>
  );
}
