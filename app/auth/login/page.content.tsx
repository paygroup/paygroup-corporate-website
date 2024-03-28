"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input";

export const PageContent: React.FC = ({}) => {
  return (
    <section className="container py-20 flex justify-center items-center">
      <div className="bg-white py-10 w-full sm:w-7/12 text-center drop-shadow-md">
        <h1 className="text-3xl font-bold text-primary">Login</h1>
        <div className="flex flex-col items-center py-4 my-4 ">
          <div className="w-4/5 sm:w-80 ">
            <InputField
              type="email"
              name="email"
              id="email"
              className=" w-full"
              placeholder="Votre email"
            />
          </div>
          <div className="w-4/5 sm:w-80 py-6">
            <InputField
              type="password"
              name="password"
              id="password"
              className=" w-full"
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
