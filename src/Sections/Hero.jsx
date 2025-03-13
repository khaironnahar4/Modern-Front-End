// import { motion } from "motion/react"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/hero-image.png";
import strain from "../assets/strain.jpg";
// import starIcon from "../assets/star.svg"
import { motion } from "motion/react";
import StarIcon from "../components/StarIcon";
import StarOrbit from "../components/StarOrbit";
import Sparkle from "../components/Sparkle";

function Hero() {
  return (
    <section
      id="home"
      className="hero max-h-screen py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${strain})`,
        }}
      ></div>

      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>

      <StarOrbit size={410} rotate={104} shouldOrbit={true} duration={"30s"}>
        <Sparkle size="7" />
      </StarOrbit>
      <StarOrbit size={420} rotate={169} shouldOrbit={true} duration={"32s"}>
        <Sparkle size="9" />
      </StarOrbit>
      <StarOrbit size={430} rotate={-14} shouldOrbit={true} duration={"34s"}>
        <Sparkle size="8" />
      </StarOrbit>
      <StarOrbit size={440} rotate={79} shouldOrbit={true} duration={"36s"}>
        <Sparkle size="5" />
      </StarOrbit>
      <StarOrbit size={510} rotate={-178} shouldOrbit={true} duration={"38s"}>
        <Sparkle size="12" />
      </StarOrbit>
      <StarOrbit size={530} rotate={178} shouldOrbit={true} duration={"40s"}>
        <Sparkle size="10" />
      </StarOrbit>
      <StarOrbit size={550} rotate={120} shouldOrbit={true} duration={"42s"}>
        <StarIcon size="12" />
      </StarOrbit>
      <StarOrbit size={590} rotate={120} shouldOrbit={true} duration={"44s"}>
        <StarIcon size="8" />
      </StarOrbit>
      <StarOrbit size={620} rotate={-120} shouldOrbit={true} duration={"46s"}>
        <StarIcon size="6" />
      </StarOrbit>
      
      <StarOrbit size={710} rotate={145} shouldOrbit={true} duration={"48s"}>
        <Sparkle size="14" />
      </StarOrbit>
      <StarOrbit size={800} rotate={-72} shouldOrbit={true} duration={"50s"}>
        <StarIcon size="20" />
      </StarOrbit>
      </div>
      

      <div className="hero-content flex-col justify-center items-center">
        {/* <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="flex justify-center"
        >
          <img
            src={heroImage}
            className="md:w-[120px] bg-transparent rounded-lg"
          />
        </motion.div> */}

        <div className="text-center ovo">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="md:text-2xl text-xl"
          >
            Hi, we are NexGenix
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="md:py-6 py-3 text-3xl sm:text-6xl lg:text-[66px]"
          >
            A Web Development Agency
          </motion.p>
          {/* social media links */}
          <div className="flex justify-center gap-6 sm:text-3xl text-2xl">
            {/* facebook */}
            <motion.div
              initial={{ y: -20, scale: 0, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
              }}
            >
              <a href={"#home"} className="hover:text-[#6FB72F] cursor-pointer">
                <FaFacebook />
              </a>
            </motion.div>

            {/* github */}
            <motion.div
              initial={{ y: -20, scale: 0, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
            >
              <a href={"#home"} className="hover:text-[#6FB72F] cursor-pointer">
                <FaGithub />
              </a>
            </motion.div>

            {/* linkedin */}
            <motion.div
              initial={{ y: -20, scale: 0, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.1,
              }}
            >
              <a href={"#home"} className="hover:text-[#6FB72F] cursor-pointer">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-4 mt-4 justify-center">
            <motion.a
              initial={{ y: 30, opacity: 0, scale: 0 }}
              whileInView={{ y: 0, opacity: 100, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.3,
              }}
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-lime-400 text-black"
            >
              Contact Us
            </motion.a>
            <motion.a
              initial={{ y: 30, opacity: 0, scale: 0 }}
              whileInView={{ y: 0, opacity: 100, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.5,
              }}
              href="#"
              className="px-10 py-3 border border-gray-500 rounded-full"
            >
              Explore
            </motion.a>
          </div>
          {/* <button className="btn primaryBtn">Get Started</button> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
