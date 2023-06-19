export function Logo(){
    return (
        <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2 text-4xl text-white font-bold">Agende já</span>
      </div>
    )
}