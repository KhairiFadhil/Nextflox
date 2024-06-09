import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Carousel(){
    return(
            <div className="carousel-card">
                <a className="flex relative h-full overflow-hidden" style={{height: '440px'}}>
                    <img src="https://mangadex.org/covers/8f5366b7-3c41-4cff-895c-385a41d5e39a/dca61f18-4968-4869-a03b-9b20fceb3ef8.jpg" 
                    className="absolute left-0 top-0 w-[100%] h-[150%] object-cover select-none" style={{objectPosition: "0px 30%"}}></img>
                    <div className=" inset-0 absolute bg-gradient-to-t from-[black] to-transparent"></div>
                    <div className=" mb-6 md:mb-0 md:py-4 grid md:grid-rows-1 gap-2 md:h-[77%] sm:h-[65%] h-[70%] mt-auto xl:max-w-[1440px] w-full mx-auto">
                        <div className="h-full relative z-20 flex gap-4">
                            <div className="rounded h-full shadow-md object-cover aspect-[7/10] group object-top w-auto">
                                <img src="https://mangadex.org/covers/8f5366b7-3c41-4cff-895c-385a41d5e39a/dca61f18-4968-4869-a03b-9b20fceb3ef8.jpg" className="w-full h-full rounded object-cover shadow-md" >
                                </img>
                            </div>
                            <div className="grid mt-auto min-h-0 gap 6 h-full" style={{minHeight: '0px', gridTemplateRows: 'max-content min-content auto min-content'}} >
                                <h2 className="text-4xl font-bold line-clamp-5" style={{lineHeight:"2.75rem"}}>TITLE NARGO</h2>
                                <h4>Title other, blabalbalba</h4>
                                <div>Genre</div>
                                <div className="line-clamp-5 text-gray-200">
                                    Raznime is an anime streaming website built with Next.js 14, powered by the Consumet API. It provides a user-friendly platform for streaming and exploring a wide range of anime content.
                                </div>
                                <div className="flex gap-2 mb-20">
                                    <button type="button" className="button-carousel bg-white text-black font-bold flex items-center gap-2"><span className=""><FaPlay /></span>Play</button>
                                    <button type="button" className="button-carousel bg-slate-600 font-bold flex items-center gap-2"><span ><IoIosInformationCircleOutline style={{height: "20px", width: "20px"}}/></span>More Info</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </a>
            </div>
            
        
    )
    
}

export default Carousel