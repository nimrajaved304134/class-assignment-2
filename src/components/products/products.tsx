 
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData
import biscuit2 from '../../../public/images/canberryalmond.jpeg'; // Ensure these files exist
import cake1 from '../../../public/images/redvelvetcake.jpeg';
import cake2 from '../../../public/images/chocolatecake.png';
import doughnut1 from '../../../public/images/glazeddelight.jpg';
import doughnut2 from '../../../public/images/chocolatedoughnut.jpeg';
import style from '../../app/styles/products.module.css'
import biscuit1 from '../../../public/images/vanillabiscuit.jpeg'

// other imports...

const FeaturedProducts = () => {
  // Define the type for a single product
  type Product = {
    id: number;
    title: string;
    desc: string;
    img: string | StaticImageData; // Update type to include StaticImageData
    price: number;
  };

  // Define the array of products
  const products: Product[] = [
    {
      id: 1,
      title: "Glazed Delight",
      desc: "A classic doughnut with a sweet glaze, soft and fluffy, perfect for any time of the day.",
      img: doughnut1,
      price: 12.5,
    },
    {
      id: 2,
      title: "Chocolate Dream",
      desc: "Indulge in a rich, chocolate-filled doughnut with a gooey center and a dusting of powdered sugar.",
      img: doughnut2,
      price: 15.0,
    },
    {
      id: 3,
      title: "Vanilla Crunch Biscuit",
      desc: "Crispy on the outside, soft on the inside, these biscuits are bursting with vanilla flavor and topped with sugar crystals.",
      img: biscuit1,
      price: 8.9,
    },
    {
      id: 4,
      title: "Cranberry Almond Biscuit",
      desc: "A buttery biscuit infused with tart cranberries and crunchy almonds, perfect with a cup of tea.",
      img: biscuit2,
      price: 9.5,
    },
    {
      id: 5,
      title: "Red Velvet Cake",
      desc: "A rich and moist red velvet cake layered with creamy cream cheese frosting for a decadent treat.",
      img: cake1,
      price: 25.0,
    },
    {
      id: 6,
      title: "Chocolate Fudge Cake",
      desc: "Deep, dark chocolate cake smothered in rich chocolate fudge frosting for a truly indulgent dessert.",
      img: cake2,
      price: 28.5,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.flexcontainer}>
        {products.map((product) => (
 <div key={product.id} className={style.productCard}>
              <div className={style.image}>
            <Image
  src={product.img}
  alt={product.title}
  layout="resonsive"
  width={500}
  height={500}
  className='object-contain'
/>
            </div>
            <div className={style.productinfo}>
              <h1 className={style.producttitle}>{product.title}</h1>
              <p>{product.desc}</p>
              <span className={style.productprice}>Rs. {product.price.toFixed(2)}</span>
              <button className={style.productbtn}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;