import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = () => {
    return (
        <div>
            <h2 className='font-bold text-2xl'>Filters</h2>
            <button className='bg-white h-full text-green-900 font-bold py-2 px-4 border-2 border-green-900 rounded hover:bg-green-500 hover:text-white transition ease-in-out delay-150 hover:ease-in-out'>
                Clear Filters
            </button>
            <div className=''>
                <Status />
                <Species />
                <Gender />
            </div>
        </div>
    );
};
export default Filters;
