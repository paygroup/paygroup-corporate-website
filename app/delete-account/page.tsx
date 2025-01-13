// "use client"; // classic server side rendering
import React from "react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-variants";
import Image from "next/image";
import { Popup } from "@/components/ui/popup";
import { PageContent } from "./page.content";
import { genql } from "@/graphql/genql";

const Page: React.FC = () => {
  
  return (
    <PageContent />
  );
};

export default Page;
