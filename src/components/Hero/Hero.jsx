import Title from "../Title/Title";
import LastFourArticles from "../lastFourArticles/LastFourArticles";

export default function Hero() {
  return (
    <main className="pb-30 max-lg:pt-2.5 max-md:pt-0">
      <Title title='THE BLOG' />
      <LastFourArticles />
    </main>
  )
}
