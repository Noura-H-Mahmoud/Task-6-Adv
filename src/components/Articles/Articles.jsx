import Article from "../Article/Article";
export default function Articles({ articles, classImg, Class , className}) {
    return (
        <div className={`gap-4 lg:gap-8 ${className}`}>
            {articles.map((article) => (
                <Article
                    id={article.id}
                    key={article.id}
                    image={article.image}
                    author={article.author}
                    date={article.date}
                    title={article.title}
                    abstract={article.abstract}
                    article={article}
                    classImg={classImg}
                    Class={Class}
                />
            ))}
        </div>
    );
}
