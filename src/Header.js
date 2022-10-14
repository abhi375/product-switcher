import React, { useState } from "react";
import {
  ChevronIcon,
  Logo,
  SettingsIcon,
  TickIcon,
  WorkAnalyticsIcon,
  WorkDiscourseIcon,
  WorkStoriesIcon,
} from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ activeProduct, handleSelectProduct }) {
  const [activeSpace, setActiveSpace] = useState("beta");
  const [showSpaceIdSwitcher, setShowSpaceIdSwitcher] = useState(false);

  const handleActiveSpace = (space) => {
    setActiveSpace(space);
    setTimeout(() => {
      setShowSpaceIdSwitcher(false);
    }, 500);
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 bg-[#5345F6] h-14 px-4 ">
      <div className="w-full h-full flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <Logo />

          <div className="flex p-1 rounded-full relative items-center bg-black/10 text-white">
            <motion.div
              initial={false}
              animate={{
                left: activeProduct === "Work" ? "4px" : "108px",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`absolute -z-[5] w-[104px] bg-black/20 h-8 rounded-full `}
            />
            <button
              onClick={() => handleSelectProduct("Work")}
              className={`w-[104px] text-[11px] uppercase font-medium transition-all duration-200 ease-in-out tracking-widest h-8 cursor-pointer flex items-center justify-center gap-1 ${
                activeProduct === "Work" ? "opacity-100" : "opacity-50"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => handleSelectProduct("Connect")}
              onMouseEnter={() => {
                activeProduct === "Connect" && setShowSpaceIdSwitcher(true);
              }}
              onMouseLeave={() => {}}
              className={`w-[104px] text-[11px] uppercase font-medium transition-all duration-200 ease-in-out tracking-widest h-8 cursor-pointer flex items-center justify-center gap-1 ${
                activeProduct === "Connect" ? "opacity-100" : "opacity-50"
              }`}
            >
              Connect
              <motion.div
                animate={{ opacity: activeProduct === "Connect" ? 1 : 0 }}
                className="w-1.5 h-1.5 flex items-center justify-center "
              >
                <ChevronIcon />
              </motion.div>
            </button>

            <AnimatePresence>
              {showSpaceIdSwitcher && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="absolute top-[44px] inset-x-0 bg-white text-black border border-black/10 rounded-lg shadow-lg p-1.5"
                  onMouseLeave={() => {
                    setShowSpaceIdSwitcher(false);
                  }}
                >
                  <button
                    onClick={() => handleActiveSpace("beta")}
                    className="flex w-full items-center justify-between p-2 hover:bg-black/5 rounded-lg"
                  >
                    <span>beta</span>
                    {activeSpace === "beta" && (
                      <span>
                        <TickIcon />
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => handleActiveSpace("tlkn")}
                    className="flex w-full items-center justify-between p-2 hover:bg-black/5 rounded-lg"
                  >
                    <span>tlkn</span>
                    {activeSpace === "tlkn" && (
                      <span>
                        <TickIcon />
                      </span>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-8">
          <button className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/10">
            <WorkAnalyticsIcon />
          </button>

          <button className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/10">
            <WorkDiscourseIcon />
          </button>

          <button className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/10">
            <WorkStoriesIcon />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 cursor-pointer">
            <SettingsIcon />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/10 cursor-pointer">
            <img
              className="w-8 h-8 rounded-full overflow-hidden"
              src={
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
