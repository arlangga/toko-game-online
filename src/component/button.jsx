export default function ReuseableButton({children, onClick, className = ""}){
    return(
        <button
        className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 ${className}`}
        >
            {children}
        </button>
    )
}