import style from './loader.module.scss';
import { LoaderProps } from './props';

export const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
    return (
        <div className={`${style.loader} ${className}`} {...props} />
    );
};
