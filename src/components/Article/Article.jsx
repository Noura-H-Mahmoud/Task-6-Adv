import { useNavigate } from "react-router-dom";
import Abstract from "../Abstract/Abstract";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import Categories from "../Categories/Categories";
import TitleArticle from "../TitleArticle/TitleArticle";

export default function Article({ id, image, author, date, title, abstract, article, Class, classTitle, classFont, classImg }) {
    const navigate = useNavigate();
    const detailPage = (id) => {
        navigate(`/Task-6-Adv/detail/${id}`);
    }
    return (
        <div className={`cursor-pointer ${Class}`} onClick={() => detailPage(id)} >
            <img src={image} alt="Article Photo" className={`object-cover w-full ${classImg}`} />
            <div>
                <AuthorInfo author={author} date={date} />
                <div className={`my-3 ${classTitle}`}>
                    <TitleArticle titleArticle={title} className={classFont} />
                </div>
                <Abstract para={abstract} />
                <div className="flex gap-2 mt-6">
                    {article.categories.map((category) => (
                        <Categories
                            key={category.id}
                            category={category.category}
                            article={article}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
