import { useSession } from "next-auth/react";
import React from "react";
import { signOut } from "next-auth/react";

function SettingsModal() {
  const { data: session } = useSession();
  return (
    <div className="backdrop-blur-sm bg-black/10 h-screen w-screen absolute flex justify-center items-center">
      <div className="bg-red absolute text-white bg-neutral-800 rounded-md w-1/5 py-10 px-4 flex flex-col">
        <span className="font-sans lg:text-lg lg:block md:text-md hidden ">
          Hi {session?.user?.name ? `${session?.user?.name}` : "User"} 👋
        </span>
        <button
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}`,
            })
          }
          className="w-full bg-blue-400 py-2 px-2 rounded-md mt-8"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
