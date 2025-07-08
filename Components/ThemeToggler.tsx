"use client";

import { useTheme } from "next-themes";
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";


export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();

  return (
    <div>
    {
      theme ==="dark" ? (<MdWbSunny  className="" onClick={()=>setTheme("light")}/>) : (<IoMdMoon className="" onClick={()=>setTheme("dark")}/>)
    }
    </div>
  )
}
