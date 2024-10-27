import { useSelector } from "react-redux";
import Articles from "../Articles/Articles";
import HeadTitle from "../HeadTitle/HeadTitle";
import { nineAriclesExcludingCurrent } from "../../redux/slice";

export default function SuggestedArticles({ id }) {
    const articles = useSelector(state => nineAriclesExcludingCurrent(state, Number(id)));

    return (
        <div className="w-[342px] max-md:w-full">
            <HeadTitle className="mb-8" h2="Recent blog posts" />
            <Articles articles={articles} className="flex flex-col max-lg:gap-8" classImg=' mb-8' />
        </div>
    );
}
