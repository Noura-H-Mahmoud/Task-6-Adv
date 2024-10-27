
export default function AuthorInfo({ author, date, day }) {
    return (
        <div className="flex text-sm h-5 items-center gap-[4px]">
            <p className="text-purple">{author}</p>
            <p className="text-purple">{day}</p>
            {day ? (<p>,</p>) : <span className="bg-purple h-[5px] w-[5px] rounded-full"></span>}
            <p className="text-purple">{date}</p>
        </div>
    )
}
