import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MergeFormdataInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();

        const file = req.file ?? null;

        const merged = {
            ...req.body,
            file,
        };

        req.body = merged;

        return next.handle();
    }
}
