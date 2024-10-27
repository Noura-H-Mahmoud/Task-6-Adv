
export default function Button({ buttonContent, className }) {
    return (
        <button className={`px-2.5 py-0.5 text-sm font-medium rounded-2xl border-none ${className}`}>
            {buttonContent}
        </button>
    )
}
