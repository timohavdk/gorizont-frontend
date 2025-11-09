import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect, RedirectType } from 'next/navigation';
import { useForm } from 'react-hook-form';
import useCreateArticle from '@/hooks/api/articles/use-create-article';

const schema = z.object({
    title: z.string()
        .min(1, { error: 'Обязательное поле' })
        .max(100, { error: 'Заголовок должен быть меньше 100 символов' }),
    text: z.string()
        .min(1, { error: 'Обязательное поле' })
        .max(5000, { error: 'Текст должен быть меньше 5000 символов' }),
    file: z.file({ error: 'Обязательное поле' })
        .max(1024 * 1024 * 20, { error: 'Файл слишком большой, максимальный размер 20 МБ' })
        .mime(['image/jpeg', 'image/png'], { error: 'Неподходящий тип файла, допустимые типы файлов: png, jpeg' }),
});

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
