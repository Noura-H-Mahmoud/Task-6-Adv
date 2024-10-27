
export default function Footer({ul}) {
  return (
    <footer className="flex px-28 gap-3.5 py-30 text-xl max-md:items-center max-md:gap-30 max-md:flex-col-reverse">
        <p className="dark:text-white">© 2023</p>
        <ul className="flex gap-3.5 max-md:flex-col max-md:items-center">
            {ul.map((li, index)=>(
                <li key={index} className="cursor-pointer dark:text-white">
                    <a href="#" target="_blank" rel="noopener noreferrer">{li.content}</a>
                </li>
            ))}
        </ul>
    </footer>
  )
}
