import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";
import { Toaster } from "sonner";

const RoutesLayout = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <main>{children}</main>
      <Toaster />
    </ThemeProvider>
  );
};

export default RoutesLayout;
