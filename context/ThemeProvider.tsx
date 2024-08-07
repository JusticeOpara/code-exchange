"use client"

import { ClerkProvider } from "@clerk/nextjs";
import dark from "@clerk/themes";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Toaster } from "sonner";

interface ThemContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemContextType | undefined>(undefined);
export function ThemeProvider({ children } : { children : React.ReactNode }) {
  const [mode, setMode] = useState("dark");

  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (

      <ThemeContext.Provider value={{ mode, setMode }}>
        <ClerkProvider  
        // appearance={{
        //    baseTheme: mode === "dark" ? dark : undefined,
        // }}
        >
            {children}
        </ClerkProvider>
        <Toaster richColors theme={mode === "dark" ? "dark" : "light"} />
      </ThemeContext.Provider>
    
  );
}
export function useTheme() {
    const context = useContext(ThemeContext);
  
    if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
  
    return context;
  }


