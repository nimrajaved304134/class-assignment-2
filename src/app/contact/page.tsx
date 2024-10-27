"use client"
import React , {useState} from 'react'
import Hero from '../../components/hero/hero';
import style from '../../app/styles/contactus.module.css'


const Contact: React.FC = () => {
  const [email , setEmail] = useState<string>('');
  const [message , setMessage] = useState <string>('');
  const [submitting , setSumitting] = useState <boolean>(false);
  const [success , setSuccess] = useState <boolean>(false);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSumitting(true);

    setTimeout(() => {
      setSumitting(false)
      setSuccess(true)
      setEmail('')
      setMessage('')

    } , 2000)
  };


  return (
    <>
    <Hero />
    <div className={style.body}>
      <h2 className={style.heading}>Contact Jumani&aposs</h2>
     <p className={style.details1}>At JUMANI&aposS , we love hearing from you! Whether you have questions about our fresh baked goods, need help with a special order, or just want to share your feedback, we&aposre here to listen. Our team is dedicated to providing you with the best service and delicious treats. Feel free to reach out to us directly via email at <em>info@jumani&aposs.com</em> or call us at <em>+123 456 7890</em>..</p>
     <p className={style.details2}>We look forward to hearing from you!</p>
      </div> 
    <div className={style.container}>
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className={style.heading}>CONTACT US</h2>
        <label htmlFor='email' className={style.label}>Email</label>
        <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={style.inputfield}
        />
      </div>

      <div>
        <label htmlFor='message' className={style.label}>Message</label>
        <input
        type='message'
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className={style.inputfield}
        />
      </div>

      <button
      className={style.button}
      type='submit'
      disabled={submitting}
      
      >
        {submitting ? 'submitting...' : 'submit'}
      </button>

      {success && (
              <p className={style.text}>Thank you for contacting!</p>
            )}
            <p className={style.text}>We will try our best to reply you as soon as possible !</p>
      </form>
    </div>

    </>
  )
}

export default Contact