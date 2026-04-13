import { MagnifyingGlassIcon } from "@phosphor-icons/react";

function SearchForm() {

    return (
        <form
            className="relative flex items-center w-full"
        >
            <div className="relative w-full flex items-center">
                <input
                    className="w-full h-10 pl-4 pr-12 text-black bg-white rounded-lg shadow-sm
                             border-2 border-transparent
                             focus:outline-none focus:border-blue-900 
                             placeholder:text-slate-400
                             transition-all duration-200"
                    type="search"
                    placeholder="Buscar produto"
                    id="busca"
                    name="busca"

                />
                <button
                    type="submit"
                    className="absolute right-1 h-8 w-8 rounded-md
                             bg-gray-500 hover:bg-blue-900
                             text-white 
                             flex items-center justify-center
                             transition-all duration-200
                             hover:scale-105 active:scale-95
                             shadow-sm hover:shadow-md"
                    aria-label="Buscar"
                >
                    <MagnifyingGlassIcon size={15} weight="light" />
                </button>
            </div>
        </form>
    );
}

export default SearchForm