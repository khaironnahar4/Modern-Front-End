import html from "../assets/technology/html-5.png";
import css from "../assets/technology/css.png";
import js from "../assets/technology/js.png";
import react from "../assets/technology/physics.png";
import node from "../assets/technology/node-js.png";
import mongodb from "../assets/technology/database-storage.png";
// import { div } from "framer-motion/client";
import Technology from "../components/Technology";

function Integration() {
  const technologies = [
    {
      name: "HTML",
      image: html,
      shortDescription:
        "The standard markup language for creating web pages and applications.",
    },
    {
      name: "CSS",
      image: css,
      shortDescription:
        "A stylesheet language used to design and style websites with layouts, colors, and fonts.",
    },
    {
      name: "JavaScript",
      image: js,
      shortDescription:
        "A powerful programming language that enables interactive and dynamic web content.",
    },
    {
      name: "React",
      image: react,
      shortDescription:
        "A JavaScript library for building fast and scalable user interfaces.",
    },
    {
      name: "Node.js",
      image: node,
      shortDescription:
        "A runtime environment that allows JavaScript to be used for backend development.",
    },
    {
      name: "MongoDB",
      image: mongodb,
      shortDescription:
        "A NoSQL database that provides flexible and scalable data storage.",
    },
  ];
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
        <div className="flex flex-col items-center">
          <div className="inline-flex border border-lime-400 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
            Technology
          </div>
          <h2 className="text-6xl font-medium mt-6">
            Our <span className="text-lime-400">technologies</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            We combine creativity, technology, and strategy to build websites
            that not only look great but also deliver exceptional functionality.
          </p>
        </div>
        <div className="h-[400px] lg:h-[800px] mt-8 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <Technology technologies={technologies} reverse={true} />
          <Technology technologies={technologies.slice().reverse()} className="hidden md:flex"/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Integration;
