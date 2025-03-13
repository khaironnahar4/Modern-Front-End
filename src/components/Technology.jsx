// import { motion } from "motion/react";
import  {motion } from "framer-motion"

function Technology({ technologies, reverse = false }) {
  return (
    <motion.div 
    initial={{
      y: reverse ? "-50%" : 0,
    }}
    animate={
      {
        y: reverse ? 0 : "-50%",
      }
    }
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }}
    className="flex flex-col gap-4 pb-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="bg-neutral-900 border border-white/19 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <img src={tech.image} alt="image" className="size-24" />
          </div>
          <h3 className="text-3xl text-center mt-6">{tech.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {tech.shortDescription}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

export default Technology;
