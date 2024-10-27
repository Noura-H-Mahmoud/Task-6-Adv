import Input from "../Input/Input";

export default function Newlatters({ para, h2, text }) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-semibold text-[#7F56D9] mb-3">{para}</p>
            <h2 className="text-darkColor text-5xl font-semibold mb-6 dark:text-white text-center max-md:text-start">{h2}</h2>
            <p className="text-xl text-textColor dark:text-textDarkColor text-center px-4 mb-10 max-md:text-start max-md:px-0">{text}</p>
            <div className="w-full flex justify-center items-center">
                <Input value='Subscribe' placeholder='Enter your email'/>
            </div>
        </div>
    )
}
