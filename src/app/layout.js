'use client';

import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar/>
        <div className="h-screen">
         
          <main>
            {children}
          </main>
        </div>


      </body>
    </html>
  );
}
