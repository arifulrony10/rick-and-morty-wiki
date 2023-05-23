const Search = ({ setSearch }) => {
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
                    className='border-2 md:min-w-2/5 md:w-3/5 border-green-900 rounded p-2 h-full text-lg shadow shadow-green-400 focus:border-green-900 focus:outline-none'
                />
                <button className='bg-white h-full  text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500  hover:text-white transition ease-in-out delay-150 hover:ease-in-out delay-150 '>
                    Button
                </button>
            </form>
        </div>
    );
};
export default Search;
