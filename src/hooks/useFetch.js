import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define fetch data function
        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url);
                // check if error
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(`${error} Could not Fetch Data`);
                setIsPending(false);
            }
        };
        // Execute function
        fetchData();
    }, [url]);

    return { data, isPending, error };
};
