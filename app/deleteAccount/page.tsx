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
        <h1 className="text-3xl font-bold text-primary">Delete Account</h1>
        <h4 className="text-lg text-red-500">Dangerous action</h4>
      </section>
    </motion.main>
  );
};

export default Page;
