import { useSelector } from "react-redux";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import { detailCurrentArticle, selectSectionsByArticleId } from "../../redux/slice";
import HeadTitle from "../HeadTitle/HeadTitle";
import Abstract from "../Abstract/Abstract";
import Categories from "../Categories/Categories";

export default function ArticleDetail({ id }) {
    const article = useSelector(state => detailCurrentArticle(state, Number(id)));
    const sections = useSelector(state => selectSectionsByArticleId(state, Number(id)));
    return (
        <div>
            <AuthorInfo day={article.day} date={article.date} />
            <HeadTitle h2={article.title} className='text-4xl !font-bold my-8' />
            <img src={article.image} alt="Article Photo" className="w-full mb-8" />
            <Abstract para={article.abstract} />
            {sections.map((section) => (
                <div key={section.id} className="mt-3">
                    {section.img && (
                        <img src={section.img} alt="Section Photo" className="w-full my-3" />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: section.content }}>
                    </div>
                </div>
            ))}
            <div className="flex gap-2 mt-6 max-md:mb-14">
                {article.categories.map((category) => (
                    <Categories
                        key={category.id}
                        category={category.category}
                        article={article}
                    />
                ))}
            </div>
        </div>
    );
}
















// import React from 'react';
// import { useSelector } from 'react-redux';
// import { detailCurrentArticle, selectSectionsByArticleId } from '../../redux/slice';

// export default function ArticleDetail({ id }) {
//     const sections = useSelector(state => selectSectionsByArticleId(state, Number(id)));
//     const article = useSelector(state => detailCurrentArticle(state, Number(id)));

//     return (
//         <div className="container mx-auto p-6">
//             <p>{article.abstract}</p>
//             {sections.map((section, index) => (
//                 <div key={index} className="mb-8">
//                     {section.img && (
//                         <img
//                             src={section.img}
//                             alt={`Section ${index + 1}`}
//                             className="w-full rounded-lg shadow-lg mb-4"
//                         />
//                     )}
//                     <div
//                         className="content text-lg text-gray-800"
//                         dangerouslySetInnerHTML={{ __html: section.content }}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }
