import React from "react";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        opacity: 0,
        x: -100,
      },
      whileInView: {
        opacity: 1,
        x: 0,
      },
    },
    button: {
      initial: {
        opacity: 0,
        y: -100,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi,I Am <br /> Saifullah Khan.
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer ", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:Saif9124115@gmail.com">Hire Me</a>
            <a href="#work">
              Project <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
