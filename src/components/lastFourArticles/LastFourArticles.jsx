import { useSelector } from "react-redux";
import { selectLastFourArticles } from "../../redux/slice";
import Article from "../Article/Article";
import HeadTitle from "../HeadTitle/HeadTitle";


export default function LastFourArticles() {
    // last four articles
    const [article1, article2, article3, article4] = useSelector(selectLastFourArticles);
    return (
        <div className='px-28'>
            <HeadTitle className='mb-8' h2='Recent blog posts' />
            <div className="flex gap-8 mb-30 max-[1200px]:flex-col">
                <Article
                    id={article2.id}
                    key={article2.id}
                    image={article2.image}
                    author={article2.author}
                    date={article2.date}
                    title={article2.title}
                    abstract={article2.abstract}
                    article={article2}
                    Class='w-[48.684%] max-[1200px]:w-full'
                    classImg='mb-8 max-lg:mb-6'
                />
                <div className="w-[48.684%] flex flex-col gap-8 max-[1200px]:w-full">
                    <Article
                        id={article3.id}
                        key={article3.id}
                        image={article3.image}
                        author={article3.author}
                        date={article3.date}
                        title={article3.title}
                        abstract={article3.abstract}
                        article={article3}
                        Class='flex flex-row gap-6 max-md:flex-col'
                        classTitle='mt-3 mb-2'
                        classFont='text-lg'
                        classImg='max-[1200px]:w-80 max-md:w-full'
                    />
                    <Article
                        id={article4.id}
                        key={article4.id}
                        image={article4.image}
                        author={article4.author}
                        date={article4.date}
                        title={article4.title}
                        abstract={article4.abstract}
                        article={article4}
                        Class='flex flex-row gap-6 max-md:flex-col'
                        classTitle='mt-3 mb-2'
                        classFont='text-lg'
                        classImg='max-[1200px]:w-80 max-md:w-full'
                    />
                </div>
            </div>
            <Article
                id={article1.id}
                key={article1.id}
                image={article1.image}
                author={article1.author}
                date={article1.date}
                title={article1.title}
                abstract={article1.abstract}
                article={article1}
                Class='flex flex-row gap-8 max-lg:gap-6 max-[1200px]:flex-col'
                classImg='mt-30'
            />
        </div>
    )
}

