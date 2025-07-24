import { LoaderProps } from "./props";
import style from './loader.module.scss';

export const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
    return (
        <div className={`${style.loader} ${className}`} {...props} />
    );
};