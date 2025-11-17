import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect, RedirectType } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { clientFileSchema, createArticleSchema as baseSchema } from 'schemas';
import useCreateArticle from '@/hooks/api/articles/use-create-article';

const schema = baseSchema.extend({ file: clientFileSchema });

type Article = z.infer<typeof schema>;

const useArticleForm = () => {
    const { trigger, isMutating } = useCreateArticle();

    const {
        control,
        watch,
        handleSubmit,
        resetField,
        register,
        formState: { errors },
    } = useForm<Article>({
        resolver: zodResolver(schema),
    });

    const file = watch('file');

    const onDelete = () => resetField('file');

    const onSubmit = async (data: Article) => {
        const formData = new FormData();

        const { text, title, file } = data;

        if (!file) {
            return;
        }

        formData.append('text', text);
        formData.append('title', title);
        formData.append('file', file);

        const result = await trigger(formData);

        if (!result.result) {
            return;
        }

        redirect('/', RedirectType.push);
    };

    return {
        file,
        errors,
        isMutating,
        onSubmit,
        control,
        watch,
        handleSubmit,
        register,
        onDelete,
    };
};

export default useArticleForm;
