import Link from 'next/link';
import React from 'react'
import style from '../../app/styles/footer.module.css'

const  Footer = () => {
  return (
    <div className={style.body}>
      <div className={style.box}>
      <h1 className={style.heading}>
      <Link href='/' className={style.link}> jumani&aposs </Link> 
      </h1>
      <p className={style.heading}> @ All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer;