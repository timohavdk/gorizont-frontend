import useCreateArticle from "@/hooks/api/articles/use-create-article";
import { redirect, RedirectType } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

const useArticleForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { trigger, isMutating } = useCreateArticle();

    const isDisabled = isMutating || !title || !text;

    const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target as HTMLInputElement;

        setTitle(value);
    };

    const onChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const { value } = event.target as HTMLTextAreaElement;

        setText(value);
    };

    const onButtonClick = async () => {
        const result = await trigger({
            text,
            title,
        });

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