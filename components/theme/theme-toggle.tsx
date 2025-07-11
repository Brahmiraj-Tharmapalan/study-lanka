"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden group-focus:motion-preset-pop" />
      <MoonIcon className="h-[1.2rem] w-[1.2rem] hidden dark:block group-focus:motion-preset-pop" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}