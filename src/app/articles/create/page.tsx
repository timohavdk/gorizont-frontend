"use client"

import { ButtonPrimary } from "@/components/base/button/primary/button-primary";
import { Input } from "@/components/base/input/input";
import { Textarea } from "@/components/base/textarea/textarea";
import { PrimaryHeading } from "@/components/typography/headings/primary-heading/primary-heading";
import useArticleForm from "./use-article-form";

import style from './page.module.scss';

const CreateArticlePage = () => {
    const {
        title,
        text,
        isMutating,
        isDisabled,
        onChangeTitle,
        onChangeText,
        onButtonClick,
    } = useArticleForm();

    return (
        <div>
            <PrimaryHeading className={`${style.header}`}>
                Создать статью
            </PrimaryHeading>
            <form className={`${style.form}`}>
                <Input
                    id="title"
                    label="Заголовок"
                    value={title}
                    onChange={onChangeTitle}
                />
                <Textarea
                    id="text"
                    label="Текст"
                    className={`${style.textarea}`}
                    value={text}
                    onChange={onChangeText}
                />

                <ButtonPrimary
                    type="button"
                    isLoading={isMutating}
                    disabled={isDisabled}
                    className={`${style.button}`}
                    onClick={onButtonClick}
                >
                    Отправить
                </ButtonPrimary>
            </form>
        </div >
    );
};

export default CreateArticlePage;