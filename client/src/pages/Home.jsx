/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import { CustomButton } from "../components";
import state from "../store";

export default function Home() {
  const sanp = useSnapshot(state);
  return (
    <div>
      <AnimatePresence>
        {sanp.intro && (
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="./threejs.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET'S
                  <br className="xl:block hidden" /> DO IT.
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool.<strong>Unleash your imagination</strong>
                  {""}and define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Customize it"
                  handleClick={() => (state.intro = false)}
                  customStyle="w-fit px-4 py-2.5 font-bold text  -sm"
                ></CustomButton>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
