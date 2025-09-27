import { useEffect, useState } from 'react'

const useFilePreview = (file: File | null) => {
    const [url, setUrl] = useState<string | null>(null);

    const release = () => {
        if (url) {
            URL.revokeObjectURL(url)
        }

        setUrl(null)
    }

    useEffect(() => {
        if (!file) {
            return;
        }

        const newUrl = URL.createObjectURL(file);

        setUrl(newUrl);

        return release;
    }, [file]);

    return url;
};

export default useFilePreview;