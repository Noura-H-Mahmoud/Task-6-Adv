import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import { selectCurrentArticles } from "../../redux/slice";
import Articles from "../Articles/Articles";
import HeadTitle from "../HeadTitle/HeadTitle";

export default function AllBlogs() {
    const articles = useSelector(selectCurrentArticles);
    return (
        <div className="px-28">
            <HeadTitle className='mb-8 mt-30 max-lg:mt-0 max-md:mt-30' h2='All blog posts' />
            <Articles articles={articles} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' classImg='mb-8'/>
            <div className="my-30 max-lg:mb-[60px] max-md:my-[50px]">
                <Pagination />
            </div>
        </div>
    );
}

























// import { useSelector, useDispatch } from 'react-redux';
// import Pagination from '../Pagination/Pagination';
// import { selectCurrentArticles } from '../../redux/slice';

// export default function AllBlogs() {
//   const dispatch = useDispatch();
//   const articles = useSelector(selectCurrentArticles); 

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-6">All Blogs</h2>


//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <div key={article.id} className="p-4 border rounded-lg shadow-md">
//             <img src={article.image} alt={article.title} className="h-40 w-full object-cover rounded-t-lg" />
//             <div className="p-2">
//               <h4 className="text-xl font-semibold">{article.title}</h4>
//               <p className="text-gray-600">{article.author}</p>
//               <p className="text-gray-500">{article.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-center">
//         <Pagination />
//       </div>
//     </div>
//   );
// }

