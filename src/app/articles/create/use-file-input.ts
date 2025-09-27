import { useState } from "react";

const useFileInput = () => {
    const [file, setFile] = useState<File | null>(null);

    const onSelect = (files: FileList) => {
        const newFile = files[0];

        setFile(newFile);
    }

    const onDelete = () => {
        setFile(null);
    }

    return {
        file,
        onSelect,
        onDelete,
    }
};

export default useFileInput;