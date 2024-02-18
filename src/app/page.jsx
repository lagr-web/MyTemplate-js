"use client"

import Card from "@/components/Card";
import data from "@/data/data.json";
import { useEffect, useState } from "react";
//import PhoneLink from '@/components/PhoneLink';
import usePhoneLink from "@/hooks/usePhoneLink";

const Page = () => {

  const phoneNumber = '123456';
  const phoneLink = usePhoneLink(phoneNumber);
 



  console.log(Object.keys(data.category));

  return (
    <>
    
      <header className="w-full bg-black h-10 p-2 text-white text-right font-bold text-lg ">Poul Kendis</header>
      
      <div className="w-2/5 mx-auto my-10">{data.intro.content}</div>
      {
        Object.keys(data.category).map((category, index) => (
          <section className="z-0 container mx-auto my-10" key={index}>
            <div className="w-20 bg-black text-white font-bold m-4 text-center rounded-lg mx-5 md:mx-2  lg:mx-2 xl:mx-20 text-xl">
              {category}
            </div>
            <div className="cardwrapper">

              {(data.category[category]) &&
              (data.category[category]).map((item, innerindex) => (
                <Card key={innerindex} data={item} />
              ))}

            </div>
          </section>
        ))
      }

      <footer className="bg-black text-white p-1 text-center object-bottom">
        mail:manglerbarelige@gmail.com | mobil: {phoneLink}
      </footer>

    </>

  )
}

export default Page;