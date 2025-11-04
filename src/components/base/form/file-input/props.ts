import { ComponentProps } from 'react';

export type FileInputProps = Omit<ComponentProps<'input'>, 'onChange' | 'onBlur'> & {
    label?: string;
    onSelectFile?: (files: FileList) => void;
    maxFilesCount?: number;
    mimeTypes?: string[];
    maxFileSize?: number;
    onChange: (files: File[]) => void;
};
