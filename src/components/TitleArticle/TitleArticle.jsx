import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/sliceMode";
import ArrowRightTop from "../SvgFiles/ArrowRightTop";

export default function TitleArticle({ titleArticle, className }) {
    const darkMode = useSelector(selectTheme);
    const svgStrokeColor = darkMode ? '#FFFFFF' : '#1A1A1A';
    return (
        <div className="flex items-start justify-between gap-4">
            <h3 className={`text-2xl font-semibold dark:text-white ${className}`}>{titleArticle}</h3>
            <div className="h-2.5">
                <ArrowRightTop color={svgStrokeColor} />
            </div>
        </div>
    );
}

