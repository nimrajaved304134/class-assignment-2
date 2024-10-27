import React from 'react'
import Hero from '../../components/hero/hero'
import style from '../../app/styles/about.module.css'

const About = () => {
  return (
   <>
   <Hero />
   <div className={style.body}>
         <h2 className={style.heading}>About JUMANI&aposS BAKERY</h2>
        <p className={style.details1}>Welcome to JUMANI&aposS! We&aposre passionate about bringing fresh, delicious, and beautifully crafted baked goods to our community. Every item in our bakery is made with high-quality ingredients, a dash of creativity, and a whole lot of love. From classic breads and pastries to custom cakes and unique treats, we have something to satisfy every craving.

        Our skilled bakers are dedicated to perfecting their craft and making each visit to our bakery a memorable experience. Whether you&aposre stopping by for a morning coffee and pastry or picking up a dessert for a special occasion, we&aposre here to make your day a little sweeter.</p>
        
        <p className={style.details2}>Thank you for choosing JUMANIvS. We can&apost wait to serve you with our fresh, handcrafted delights!</p>
         </div> 
   </>
  )
}

export default About