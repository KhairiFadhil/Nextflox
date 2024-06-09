"use client"
import { useState,useEffect } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar({show, onClick}){
    const [scrollEffect, setScrollEffect] = useState(true)
    function HandleScroll(){
        if (window.scrollY > 10){
            setScrollEffect(false)
        }
        else {
            setScrollEffect(true)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
    
        return () => {
          window.removeEventListener("scroll", HandleScroll);
        };
      }, []);

    return(
    <div className={scrollEffect ? "z- bg-transparent w-full h-14 fixed z-50 justify-center transition-all" : " bg-slate-900 w-full h-14 fixed z-50 justify-center transition-all"}>
            <div className="flex mx-auto max-w-[1440px] max-h-14 min-h-14 ">
                <div className="w-full flex gap-2 px-4 justify-end">
                    <div className="flex min-w-fit mr-auto gap-5 ">
                    <button type="button" onClick={onClick} className="content-center"><RxHamburgerMenu className=" text-slate" style={{width:"20px", height:"20px"}}/></button>
                    <a href="#" className="content-center">Home</a>
                    <a href="#" className="content-center">TV Shows</a>
                    <a href="#" className="content-center">Movie</a>
                    <a href="#" className="content-center">My List</a>
                    </div>

                    <div className="z-20 flex justify-end lg:transition-[flex-grow] lg:max-w-[50rem]">
                        <div className="navbar-search flex flex-grow w-full">
                            <form className="content-center">
                                <button></button>
                                <input className=" h-7 px-2 input-search placeholder:px-2 backdrop-blur-md" type="text" placeholder="Search"></input>
                            </form>
                        </div>

                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Navbar