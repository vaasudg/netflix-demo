import { useEffect, useState } from 'react';

const useFetchImageData = (fetchDataFunction: any) => {
    const [imageData, setImageData] = useState<any[]>([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            const data: any = await fetchDataFunction();
            if (isMounted) {
                setImageData(data);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [fetchDataFunction]);

    return imageData;
};

export default useFetchImageData;
