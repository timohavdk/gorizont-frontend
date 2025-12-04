import { PipeTransform, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ZodType } from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodType) {}

    transform(value: unknown) {
        try {
            this.schema.parse(value);

            return value;
        }
        catch (error) {
            if (error?.name === 'ZodError' && !!error?.message) {
                throw new BadRequestException({
                    error: 'Validation failed',
                    data: JSON.parse(error.message),
                });
            }

            throw new InternalServerErrorException();
        }
    }
}
