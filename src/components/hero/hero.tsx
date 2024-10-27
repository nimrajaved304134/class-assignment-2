import Image from "next/image";
import React from "react";
import offerpic from '../../../public/images/offerpic.png';
import style from '../../app/styles/hero.module.css'

const Hero = () => {
  return (
    <div className={style.box}>
      {/* TEXT CONTAINER */}
      <div className={style.textbox}>
        <h1 className={style.heading}>Delicious DOUGHNUTS , CAKES and BISCUITS</h1>
        <p className={style.para}>
        Enjoy delicious treats at irresistible prices! Don&apost miss out on our bakery sale  fresh flavors, fantastic deals!
        </p>
        <button className={style.button}>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className={style.imagebox}>
        <Image src={offerpic} alt="" width={900} height={900} />
      </div>
    </div>
  );
};

export default Hero;