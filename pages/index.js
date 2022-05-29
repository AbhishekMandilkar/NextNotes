import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(providers.google);
    if (session?.user) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [session]);
  return (
    <div
      className={
        "w-screen h-screen bg-black flex flex-col justify-center items-center text-center"
      }
    >
      <h1 className="text-4xl lg:text-7xl pb-4 font-bold gradient-text">
        Welcome to Next Notes
      </h1>
      <h3 className="text-lg lg:text-2xl py-2 text-white opacity-50">
        Take your notes to Next level
      </h3>
      <div className="flex items-center justify-around mt-2 ">
        {/* {providers?.map((provider) => (
          <>
            <button
              onClick={() => signIn()}
              className="bg-white border-2 px-4 py-2 rounded-lg mx-1"
            >
              Login
            </button>
          </>
        ))} */}

        <button
          onClick={() => signIn(providers?.google?.id)}
          className="sigin-with-google"
        >
          Sign in with {providers?.google?.name}
        </button>
        {/* <button className="border-2 text-white px-4 py-2 rounded-lg w-1/2 mx-1">
          Register
        </button> */}
      </div>
      <span className="text-white opacity-50 absolute bottom-0 p-4">
        Abhishek Mandilkar © 2022
      </span>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await getProviders(context),
    },
  };
}
