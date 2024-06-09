"use client";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import { useState } from "react";

function Navigation() {
    const [showNav, setShowNav] = useState(false)
    const showSideBar = () => setShowNav(!showNav)
  return (
    <div>
      <header>
        <Navbar onClick={showSideBar}/>

      </header>
      <aside>
        <SideBar onClick={showSideBar} show={showNav}/>
      </aside>
    </div>
  );
}
export default Navigation;
