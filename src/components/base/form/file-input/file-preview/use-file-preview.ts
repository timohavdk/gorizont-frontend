import { useEffect, useState } from 'react';

const useFilePreview = (file: File | null) => {
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!file) {
            return;
        }

        const newUrl = URL.createObjectURL(file);

        setUrl(newUrl);

        const release = () => {
            if (newUrl) {
                URL.revokeObjectURL(newUrl);
            }

            setUrl(null);
        };

        return release;
    }, [file]);

    return url;
};

export default useFilePreview;
