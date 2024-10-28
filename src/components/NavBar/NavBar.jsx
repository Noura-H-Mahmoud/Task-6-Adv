import { NavLink } from "react-router-dom";
import ModeButtons from "../ModeButtons/ModeButtons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/sliceMode";
import MenuButton from "../SvgFiles/MenuButton";
import CloseButton from "../SvgFiles/CloseButton";

export default function NavBar({ data }) {
    const { Name, list } = data;
    const [hasScroll, setHasScroll] = useState(false);
    const [show, setShow] = useState(false);
    const darkMode = useSelector(selectTheme);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHasScroll(true);
            } else {
                setHasScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const svgStrokeColor = darkMode ? '#FFFFFF' : '#1A1A1A';

    return (
        <>
            <nav className={`w-full flex justify-between items-center 
        text-xl max-[992px]:text-lg py-2.5 fixed left-1/2 top-0 transform -translate-x-1/2 
        px-28 max-lg:px-5 my-5 bg-white dark:bg-darkColor h-20 max-lg:my-0 max-md:h-[72px]
        ${hasScroll ? 'shadow-md mt-0' : ''}`}
            >
                <h2 className="font-semibold dark:text-white">{Name}</h2>
                <div className="flex gap-3.5 max-md:hidden">
                    <ul className="flex items-center gap-3.5">
                        {list.map((li, index) => (
                            <li key={index} className=" relative">
                                <NavLink to={li.link}
                                    end
                                    className={({ isActive }) =>
                                        `dark:text-white pb-1 ${isActive ?
                                            'after:w-full' : 'after:w-0'} 
                                    transition-all duration-500 ease-in-out 
                                    after:absolute after:left-0 
                                    after:-bottom-[5px] after:h-[1px] 
                                    after:bg-current` }>
                                    {li.linkTitle}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ModeButtons />
                </div>
                <button onClick={() => setShow((prev) => !prev)} className="hidden max-md:block">
                    < MenuButton color={svgStrokeColor} />
                </button>
            </nav>
            <nav className={`${hasScroll ? 'shadow-md mt-0' : ''} ${show ? 'w-full h-screen  flex flex-col items-center justify-center text-xl fixed left-1/2 top-0 transform -translate-x-1/2 bg-white dark:bg-darkColor' : 'hidden'}`}>
                <h2 className="text-lg font-semibold dark:text-white pb-[54px]">{Name}</h2>
                <div className="flex flex-col gap-3.5">
                    <ul className="flex flex-col items-center gap-5">
                        {list.map((li, index) => (
                            <li key={index} className=" relative">
                                <NavLink to={li.link}
                                    end
                                    className={({ isActive }) =>
                                        `dark:text-white pb-1 text-lg
                                         ${isActive ? 'after:w-full' : 'after:w-0'} 
                                    transition-all duration-500 ease-in-out 
                                    after:absolute after:left-0 
                                    after:-bottom-[5px] after:h-[1px] 
                                    after:bg-current` }>
                                    {li.linkTitle}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ModeButtons />
                </div>
                <button onClick={() => setShow((prev) => !prev)} className="hidden max-md:block absolute bottom-5">
                    <CloseButton color={svgStrokeColor} />
                </button>
            </nav>
        </>
    );
}