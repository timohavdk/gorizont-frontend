import { useEffect, useMemo } from 'react';

const useFilePreview = (file: File | null) => {
    const url = useMemo(() => {
        return file ? URL.createObjectURL(file) : null;
    }, [file]);

    useEffect(() => {
        return () => {
            if (url) {
                URL.revokeObjectURL(url);
            }
        };
    }, [url]);

    return url;
};

export default useFilePreview;
