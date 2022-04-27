import { useRef, useState } from 'react';

import Notification from '../ui/Notification';
import classes from './ContactForm.module.css';

export default function ContactForm() {
  const [reqStatus, setReqStatus] = useState(null);
  const [reqError, setReqError] = useState(null);

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  async function contactHandler(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;

    setReqStatus('pending');

    try {
      const response = await fetch('/api/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, message }),
      });

      const data = await response.json();

      setReqStatus('success');

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setReqError(error.message);
      setReqStatus('error');
    }
  }

  let notification;

  if (reqStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Message pending',
      message: 'Please wait...',
    };
  }

  if (reqStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Your message was successfully sent!',
    };
  }

  if (reqStatus === 'error') {
    notification = {
      status: 'error',
      title: 'There was a problem',
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Contact me today!</h1>
      <form className={classes.form} onSubmit={contactHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' ref={emailRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameRef} required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows='5' ref={messageRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification notification={notification} />}
    </section>
  );
}
