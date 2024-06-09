import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./component/navbar/sidebar";
import Navbar from "./component/navbar/navbar";
import Navigation from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
       <Navigation/>
        {children}
      </body>
    </html>
  );
}
