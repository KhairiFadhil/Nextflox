import AnimeCard from "./anime-card"
import { fetchRecentEpisodes } from "@/app/api/anime-api"

async function AnimeLatestRelease(){
    const {isError, data, error,} = await fetchRecentEpisodes
    const animeResults = data ?? {};

    if (isError || !animeResults){
        throw new Error(error || 'An unexpected error occured')
    }
    console.log(animeResults)
    return(
        <div className="flex relative w-full mx-auto max-w-[1440px] h-[250px] bg-red-600" >
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 relative gap-5">
            {/* {
                animeResults.map((anime) => (
                    <AnimeCard
                    key={ `anime-episode-card-${anime.episodeId}` }
                    anime={ anime }
                    cardType="episode"
                    href={ `/watch/${anime.episodeId}` }
                    scroll
                    />
                ))
        } */}
            </div>
        </div>
    )
}
export default AnimeLatestRelease