"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-variants";

const Page: React.FC = ({}) => {
  return (
    <motion.main
      variants={variants}
      initial="initialPage"
      animate="animatePage"
      exit="exitPage"
    >
      <section className="container py-20">
        <h1>Delete</h1>
      </section>
    </motion.main>
  );
};

export default Page;
