import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import SettingsModal from "./SettingsModal";
function Header() {
  const { data: session } = useSession();
  console.log(session?.user);
  const [showSettings, setShowSettings] = React.useState(false);
  return (
    <>
      {showSettings && <SettingsModal />}
      <div className="sticky w-screen bg-black top-0 text-white lg:px-80 md:px-52 px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold font-sans gradient-text">
          Next Notes
        </h1>
        <div className="flex items-center justify-between ">
          {!showSettings && (
            <>
              <span className="font-sans lg:text-lg lg:block md:text-md hidden mx-4">
                Hi {session?.user?.name ? `${session?.user?.name}` : "User"} 👋
              </span>
            </>
          )}
          {session?.user?.image ? (
            <>
              <Image
                src={session?.user?.image}
                alt="User"
                height={32}
                width={32}
                style={{ borderRadius: "50%", cursor: "pointer" }}
                onClick={() => setShowSettings(!showSettings)}
              />
            </>
          ) : (
            <>
              <BiUserCircle
                size={32}
                onClick={() => setShowSettings(!showSettings)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
