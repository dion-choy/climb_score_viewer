import React from "react";
import Navbar from "@/components/NavBar"; // Ensure correct path
import "./globals.css"; // Ensure global styles are applied

export const metadata = {
  title: "Climb Score Viewer",
  description: "A competitive climbing score viewer app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
