import sun from '../../assets/images/sun.svg';
import moon from '../../assets/images/moon.svg';
import sunDark from '../../assets/images/sunDark.svg';
import moonDark from '../../assets/images/moonDark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from '../../redux/sliceMode';

export default function ModeButtons() {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectTheme);
    return (
        <div className="h-10 w-24 bg-darkColor dark:bg-white rounded-[29px] flex items-center justify-center"
            onClick={() => dispatch(toggleTheme())}
        >
            {darkMode ? (
                <div className='flex items-center justify-center gap-4 z-10'>
                    <img src={sunDark} alt="Sun Icon" />
                    <img src={moonDark} alt="Moon Icon" />

                </div>
            ) : (
                <div className='flex items-center justify-center gap-4 z-10'>
                    <img src={sun} alt="Sun Icon" />
                    <img src={moon} alt="Moon Icon" />
                </div>
            )}
        </div>
    )
}
