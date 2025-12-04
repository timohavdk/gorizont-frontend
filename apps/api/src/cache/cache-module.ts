import { createKeyv, RedisClientOptions } from '@keyv/redis';
import { CacheModule as Cache } from '@nestjs/cache-manager';

const CacheModule = Cache.registerAsync({
    useFactory: async () => {
        return {
            stores: [
                createKeyv({ url: process.env.REDIS_URL_DB } as RedisClientOptions),
            ],
        };
    },
});

export default CacheModule;
