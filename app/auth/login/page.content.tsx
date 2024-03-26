"use client";
import React from "react";
import { Button } from "@/components/ui/button/button";

export const PageContent: React.FC = ({}) => {
  return (
    <section className="container py-20 flex justify-center items-center">
      <div className="bg-white py-10 w-full sm:w-7/12 text-center drop-shadow-md">
        <h1 className="text-3xl font-bold text-primary">Login</h1>
        <div className="flex flex-col items-center py-4 my-4 ">
          <div className="w-4/5 sm:w-80">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-2.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Votre email"
            />
          </div>
          <div className="w-4/5 sm:w-80">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 py-2.5 pl-5 my-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Votre mot de passe"
            />
          </div>
        </div>

        <Button
          onClick={() => {
            console.log("Se connecter");
          }}
          className="transition-all rounded-lg text-white hover:text-slate-950 ring-primary ring-2 hover:bg-transparent bg-primary w-fit"
        >
          Se connecter
        </Button>
      </div>
    </section>
  );
};
