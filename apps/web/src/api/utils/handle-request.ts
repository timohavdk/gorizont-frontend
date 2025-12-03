import { AxiosResponse } from 'axios';

type Request<TData> = () => Promise<AxiosResponse<TData>>;

const handleRequest = async <TData>(request: Request<TData>) => request().then(({ data }) => data);

export default handleRequest;
