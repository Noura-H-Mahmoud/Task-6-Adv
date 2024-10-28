
export default function Input({ value, placeholder }) {
    return (
        <div className=' w-[494px] max-md:w-full'>
            <div className="w-full flex gap-4 max-md:flex-col justify-center">
                <input type="text" placeholder={placeholder} className="border-[1px] border-[#D0D5DD] rounded-lg h-12 w-[360px] max-md:w-full pt-3 pb-3 pl-4 pr-3.5 outline-[#7F56D9] focus:shadow-none" />
                <input type="submit" value={value} className="w-[118px] h-12 bg-[#7F56D9] 
                text-white rounded-lg hover:border hover:border-solid hover:border-[#7F56D9] 
                hover:bg-white hover:text-[#7F56D9] transition-colors duration-300" />
            </div>
            <p className="pt-2 max-md:pt-4 max-md:pb-3 text-sm text-textColor dark:text-textDarkColor ">
                We care about your data in our
                <a href="#" className='border-b-[1px] border-textColor dark:border-textDarkColor inline-block ml-1'>
                    privacy policy
                </a>
            </p>
        </div>
    )
}
