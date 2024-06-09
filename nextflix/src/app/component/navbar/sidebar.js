"use client"
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoCheckmarkDone } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function SideBar({onClick, show}){
    return(
        <div className={show ? "fixed bg-slate-600 h-full w-[250px]  max-w-[250px] z-50 overflow-hidden transition-all" : "transition-all overflow-hidden fixed bg-slate-600 h-full max-w-[250px] z-50 w-0"}>
            <div className="mx-">   
                <div className="flex m-3 bg-slate-300 h-[75px]" >
                    <div className="flex flex-grow">
                        JestFlix
                    </div>
                    <div>
                    <button type="button" className="button" onClick={onClick}><IoIosArrowForward /></button>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-5 mx-4">
                        <li className="">
                            <a href="#" className="flex gap-1"><span className="img-list"><CiBellOn/></span>Notification</a>
                        </li>
                        <li className="">
                            <a href="#" className="flex gap-1"><span className="img-list"><IoCheckmarkDone  /></span>My List</a>
                        </li>
                        <li className="">
                            <a href="#" className="flex gap-1"><span className="img-list"><IoIosSettings /></span>Setting</a>
                        </li>
                        <li className="">
                            <a href="#" className="flex gap-1"><span className="img-list"><CgProfile /></span>Account</a>
                        </li>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center  mt-5">
                    <a>Login</a>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        Created By Kalri 
                        <div className="flex justify-between my-10">
                            <a>
                            <FaDiscord style={{width: "30px", height:"30px"}}/>
                            </a>
                            <a>
                            <FaInstagram style={{width: "30px", height:"30px"}} />
                            </a>
                        </div>
                    </div>
                </div> 
                </div>
                
                <div>

                </div>
            </div>
        </div>
    )
}