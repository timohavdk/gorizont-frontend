const handleAsync = async <TData, TFallback = TData | null>(
    cb: () => Promise<TData>,
    fallback: TFallback = null,
) => {
    try {
        return await cb();
    } catch (error) {
        console.log('ERROR: ', error);

        return fallback;
    }
};

export default handleAsync;
