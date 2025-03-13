import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Introduction() {
  const text = "At InnovateWeb Solutions, we specialize in creating high-performance, user-friendly websites tailored to your business needs. Whether you're a startup looking for an online presence or an established brand aiming to enhance your digital footprint, our expert team delivers cutting-edge web solutions that drive results."
  const words = text.split(" ")

  const scrollTarget = useRef(null);
  console.log(scrollTarget);
  
  const {scrollYProgress} = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(()=>{
    wordIndex.on('change', (latest)=>{
      setCurrentWord(latest)
    })
  },[wordIndex])
  
  
  return (
    <section id="introduction" className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-24 lg:top-28">
          <div className="flex justify-center">
            <div className="inline-flex border border-lime-400 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
              Introduction
            </div>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Crafting Digital Excellence. </span>
            <span className="text-white/15">
              {
                words.map((word, idx)=>
                <span key={idx} className={`transition duration-500  ${idx < currentWord && "text-white"}`}>
                  {`${word} `}
                </span> )
              }
            </span>
            <span className="text-lime-400 block">
              That&apos;s why we create layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}

export default Introduction;
