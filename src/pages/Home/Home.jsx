import { useEffect, useState } from 'react';
import CardContainer from '../../components/CharacterCard/CardContainer';

import CircleLoader from 'react-spinners/CircleLoader';

// Custom hooks
import { useFetch } from '../../hooks/useFetch';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {
    const [pageNumber, setPagenumber] = useState(1);
    const [search, setSearch] = useState('');

    const { data, isPending, error } = useFetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
    );

    return (
        <div>
            <Search setSearch={setSearch} setPagenumber={setPagenumber} />

            <div className='flex justify-center'>
                {/* Filter container */}
                <div className='w-3/12'>
                    <Filters />
                </div>
                {/* Card container */}
                <div className='w-8/12'>
                    {isPending ? (
                        <div className='w-full h-full min-h-screen flex justify-center items-center'>
                            <CircleLoader color='#36d7b7' />
                        </div>
                    ) : data === null ? (
                        <h2 className='text-5xl text-center'>
                            No data found 😵‍💫
                        </h2>
                    ) : (
                        <CardContainer characters={data} />
                    )}
                </div>
            </div>
            <Pagination
                setPagenumber={setPagenumber}
                pageNumber={pageNumber}
                data={data}
            />
        </div>
    );
};
export default Home;

450;
