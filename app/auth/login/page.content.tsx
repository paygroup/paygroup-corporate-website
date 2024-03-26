"use client";
import { Button } from "@/components/ui/button/button";
import React from "react";

export const PageContent: React.FC = ({}) => {
  return (
    <section className="container py-20">
      <div className="bg-white text-center">
        <h1 className="text-3xl font-bold text-primary">Login</h1>
        <div className="flex flex-col items-center p-4 my-4">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-96 rounded-md border-0 py-2.5 pl-5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Votre email"
          />

          <input
            type="password"
            name="password"
            id="password"
            className="block w-96 rounded-md border-0 py-2.5 pl-5 my-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Votre mot de passe"
          />
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
