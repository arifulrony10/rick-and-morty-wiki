const Search = () => {
    return (
        <div className='mx-auto m-2 max-w-3/4 mb-5'>
            <form
                action=''
                className='flex justify-center items-center gap-5 mx-auto'
            >
                <input
                    type='text'
                    name=''
                    id=''
                    className='border-2 md:min-w-2/5 md:w-3/5 border-emerald-900 rounded p-2 h-full text-lg shadow shadow-emerald-400 focus:border-emerald-900 focus:outline-none'
                />
                <button className='bg-blue-400 h-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                    Button
                </button>
            </form>
        </div>
    );
};
export default Search;
