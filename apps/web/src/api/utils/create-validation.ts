import { ZodType } from 'zod';

const createValidation = <TData>(schema: ZodType, endpoint: string) => (data: Record<string, any>) => {
    const result = schema.safeParse(data);

    if (!result.success) {
        console.log('Данные не прошли валидацию:', data);
        console.log('Endpoint', endpoint);
        console.log('Ошибка', result.error);
    }

    return result.data as TData;
};

export default createValidation;
