import Hero from "../../components/Hero/Hero";
import AllBlogs from "../../components/AllBlogs/AllBlogs";

export default function Home() {
  return (
    <div className="pt-150 max-lg:pt-[92px]">
      <Hero />
      <AllBlogs/>
    </div>
  )
}
