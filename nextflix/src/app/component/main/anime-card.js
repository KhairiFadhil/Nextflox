
function AnimeCard({anime, href, cardType, scroll = false}){
    return(
        <a className="rounded flex bg-white overflow-hidden " style={{width: "200px", height:"300px"}}>
            <img className="w-full h-full object-cover rounded" src={anime.image}>
            </img>
         </a>
    )
}
export default AnimeCard