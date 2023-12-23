import { FC, useContext } from "react";
import { Theme } from "@/store/theme";
import Image from "next/image";

export const Footer: FC = () => {
  const { currentTheme, toggleTheme } = useContext(Theme);

  return (
    <footer
      className={`flex px-20 py-3  w-full py-1 border-b-2 justify-between items-center  bottom-0 left-0`}
      style={{
        backgroundColor: `${currentTheme == "black" ? "white" : "black"}`,
        color: `${currentTheme == "black" ? "black" : "white"}`,
      }}>
      <h1 className="text-xl flex  leading-loose flex items-center">
        <span>YSML movies</span>
      </h1>
    </footer>
  );
};
