import { ComponentProps } from 'react';

export type FileInputProps = ComponentProps<'input'> & {
    label?: string;
    onSelectFile?: (files: FileList) => void;
    maxFilesCount?: number;
    mimeTypes?: string[];
    maxFileSize?: number;
    onChange: (files: File[]) => void;
    onBlur: () => void;
};
