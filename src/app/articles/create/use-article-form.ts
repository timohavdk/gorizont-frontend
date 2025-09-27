import useCreateArticle from "@/hooks/api/articles/use-create-article";
import { redirect, RedirectType } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

const useArticleForm = (file: File) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { trigger, isMutating } = useCreateArticle();

    const isDisabled = isMutating || !title || !text || !file;

    const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target as HTMLInputElement;

        setTitle(value);
    };

    const onChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const { value } = event.target as HTMLTextAreaElement;

        setText(value);
    };

    const onButtonClick = async () => {
        const data = new FormData();

        data.append('text', text)
        data.append('title', title)
        data.append('file', file)

        const result = await trigger(data);

        if (!result.result) {
            return;
        }

        redirect('/', RedirectType.push);
    };

    return {
        title,
        text,
        isMutating,
        isDisabled,
        onChangeTitle,
        onChangeText,
        onButtonClick,
    }
};

export default useArticleForm;