import Head from 'next/head';

import ContactForm from '../../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name='description'
          content='Send me your thoughts and questions about Next.js'
        />
      </Head>
      <ContactForm />
    </>
  );
}
