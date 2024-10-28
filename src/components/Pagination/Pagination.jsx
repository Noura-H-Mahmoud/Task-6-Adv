import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage, setPage } from '../../redux/slice';
import ArrowRight from '../SvgFiles/ArrowRight';
import ArrowLeft from '../SvgFiles/ArrowLeft';
import { selectTheme } from '../../redux/sliceMode';

export default function Pagination() {
    const dispatch = useDispatch();
    const { page, count } = useSelector((state) => state.article.pagination);
    const darkMode = useSelector(selectTheme);

    // Button for each page
    const PageButton = ({ number }) => (
        <button
            key={number}
            className={`w-10 h-10 rounded-lg text-sm font-medium 
            ${page === number
                    ? darkMode
                        ? 'bg-[#F9F5FF] text-darkColor'
                        : 'bg-[#F9F5FF] text-[#667085]'
                    : darkMode
                        ? 'text-white'
                        : 'text-[#667085]'
                }`}
            onClick={() => dispatch(setPage(number))}
        >
            {number}
        </button>
    );

    const Dots = (key) => (
        <div key={key} className="w-10 h-10 flex justify-center items-center text-[#667085] dark:text-white">...</div>
    );

    const generatePages = () => {
        const pages = [];

        // Always show the first 3 pages
        const firstPages = [1, 2, 3].filter((p) => p <= count);
        firstPages.forEach((p) => pages.push(<PageButton key={`page-${p}`} number={p} />));

        // Show "..." after the first 3 pages if there's a gap
        if (page > 5) {
            pages.push(Dots("start-dots"));
        }

        // Display pages around the current page
        const start = Math.max(4, page - 1);
        const end = Math.min(count - 3, page + 1);

        for (let i = start; i <= end; i++) {
            pages.push(<PageButton key={`page-${i}`} number={i} />);
        }

        // Show "..." before the last 3 pages if there's a gap
        if (page < count - 4) {
            pages.push(Dots("end-dots"));
        }

        // Always show the last 3 pages
        const lastPages = [count - 2, count - 1, count].filter((p) => p > 3); // Ensure pages are in range
        lastPages.forEach((p) => pages.push(<PageButton key={`page-${p}`} number={p} />));

        return pages;
    };

    const svgStrokeColor = darkMode ? '#FFFFFF' : '#667085';
    return (
        <div className="w-full text-[#667085] flex justify-between items-center text-sm  max-md:flex-col  max-md:gap-5">
            <button
                className="flex gap-2 dark:text-white"
                onClick={() => dispatch(prevPage())}
                disabled={page === 1}
            >
                <ArrowLeft color={svgStrokeColor} />
                Previous
            </button>
            <div className="flex gap-0.5 flex-wrap justify-center">{generatePages()}</div>
            <button
                className="flex gap-2 dark:text-white"
                onClick={() => dispatch(nextPage())}
                disabled={page === count}
            >
                Next
                <ArrowRight color={svgStrokeColor} />
            </button>
        </div>
    );
}


























