import AnimeCard from "./card"
import Carousel from "./carousels"
import AnimeList from "./title"

function Carousels(){

    return(
        <div className="relative fixed w-full">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="absolute z-20 top-[75px]">
                    <h1 className=" font-semibold text-white text-2xl">Popular Shows</h1>
                </div>
            </div>
            <Carousel/>
            <AnimeList/>
            <AnimeCard/>
            
        </div>
    )
}

export default Carousels