import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import useCreateArticle from '@/hooks/api/articles/use-create-article';

const schema = z.object({
    title: z.string(),
    text: z.string(),
    files: z.file().array(),
});

type Article = z.infer<typeof schema>;

const useArticleForm = () => {
    const { trigger, isMutating } = useCreateArticle();

    const {
        control,
        watch,
        handleSubmit,
        setValue,
        register,
    } = useForm<Article>({
        resolver: zodResolver(schema),
    });

    const files = watch('files');

    console.log('files', files);

    const file = files?.length ? files[0] : null;

    const onDelete = () => {
        setValue('files', []);
    };

    const onButtonClick = async (data: Article) => {
        const formData = new FormData();

        console.log('data');

        const { text, title } = data;

        if (!file) {
            return;
        }

        formData.append('text', text);
        formData.append('title', title);
        formData.append('file', file);

        console.log('data', formData);

        // const result = await trigger(formData);

        // if (!result.result) {
        //     return;
        // }

        // redirect('/', RedirectType.push);
    };

    return {
        file,
        isMutating,
        onButtonClick,
        control,
        watch,
        handleSubmit,
        register,
        onDelete,
    };
};

export default useArticleForm;
