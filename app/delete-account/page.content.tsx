"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-variants";
import Image from "next/image";
import { Popup } from "@/components/ui/popup";
import { User } from "./types";

// testable
export const PageContent: React.FC<{
    user: User;
}> = ({ user }) => {
    const [ isPopupOpen, setIsPopOpen ] = useState(false);

    const togglePopup = (isOpen: boolean) => () => {
        setIsPopOpen(isOpen);
    }
    
    return (
        <motion.main
        variants={variants}
        initial="initialPage"
        animate="animatePage"
        exit="exitPage"
      >
        <Popup isOpen={isPopupOpen} setOpen={togglePopup(false)} />
        <section className="container py-20">
          <h1 className="text-3xl font-bold text-primary">Delete Account</h1>
          <h4 className="text-lg text-red-500">Dangerous action</h4>
    
          <div className="sm:flex my-10 px-6 py-8 border-2 border-red-500 rounded-lg">
            <div className="sm:w-1/3 grid place-items-center w-full">
              <Image
                src={user.profilLink}
                width={200}
                height={200}
                alt="Avatar user"
                className="rounded-full "
              />
              <p className="text-lg font-bold text-center w-full py-5">
                {user.name}
              </p>
            </div>
            <div className="max-sm:text-center">
              <h3 className="text-2xl font-bold text-red-500 ">
                Delete account ?
              </h3>
              <p className="pt-3">Your account will be permanently deleted</p>
              <div className="pt-10 max-sm:grid place-items-center">
                <button
                  onClick={togglePopup(true)}
                  className="px-4 py-2 mx-2 transition-all rounded-lg text-white hover:text-slate-950 ring-primary ring-2 hover:bg-transparent bg-primary w-fit"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    )
}