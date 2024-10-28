import { Link } from "react-router-dom";
import Newlatters from "../../components/Newlatters/Newlatters";
import Articles from "../../components/Articles/Articles";
import { useSelector } from "react-redux";
import { selectThreeArticles } from "../../redux/slice";

export default function NewlattersPage() {
  const articles = useSelector(selectThreeArticles)
  return (
    <div className="px-28 pt-150 max-lg:pt-[92px]">
      <div className="max-lg:pt-2.5 max-md:pt-0">
        <Newlatters
          para='Newlatters' h2='Stories and interviews' text='Subscribe to learn about new product features, the latest in technology, solutions, and updates.'
        />
        <div className="pt-[38px] md:pt-[60px]">
          <Link to='/Task-6-Adv/' className="text-2xl font-semibold pb-8 dark:text-white">All blog posts</Link>
          <Articles articles={articles} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 pb-[50px] md:pb-[72px] lg:pb-30 col-span-1 custom-container gap-8 lg:gap-8  md:gap-4' classImg='mb-8 h-[240px]' Class='w-full' />
        </div>
      </div>
    </div>
  )
}
