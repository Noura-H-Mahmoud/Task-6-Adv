
export default function HeadTitle({className, h2}) {
  return (
    <h2 className={`text-2xl font-semibold dark:text-white ${className}`}>{h2}</h2>
  )
}
