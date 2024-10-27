"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import openicon from '../../../public/images/open.png'
import closeicon from '../../../public/images/close.png'

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {!open ? (
          <Image
            src={openicon}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src={closeicon}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      
        {open&& <div className='bg-orange-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center w-full text-3xl z-10'>
          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link href="" onClick={()=>setOpen(false)}>Menu</Link>
        <Link href="" onClick={()=>setOpen(false)}>Contact</Link>
        </div>

        }
      
    </>
  );
};

export default Menu;

