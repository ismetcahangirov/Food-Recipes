import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";
import { Toaster } from "sonner";
import Header from "../_components/Header";
import ReduxProvider from "../(redux)/ReduxProvider";

const RoutesLayout = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Header />
        <main className="min-w-screen">{children}</main>
        <Toaster />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default RoutesLayout;
