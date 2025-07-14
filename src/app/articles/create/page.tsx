"use client"

import { ButtonPrimary } from "@/components/base/button/primary/button-primary";
import { Input } from "@/components/base/input/input";
import { Textarea } from "@/components/base/textarea/textarea";
import { PrimaryHeading } from "@/components/typography/headings/primary-heading/primary-heading";
import { ChangeEventHandler, useState } from "react";

import style from './page.module.scss';

const CreateArticlePage = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target as HTMLInputElement;

        setTitle(value);
    };

    const onChangeText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const { value } = event.target as HTMLTextAreaElement;

        setText(value);
    };

    const onButtonClick = () => {
        console.log(title, text)
    };

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
                    className={`${style.button}`}
                    type="button"
                    onClick={onButtonClick}
                >
                    Отправить

                </ButtonPrimary>
            </form>
        </div >
    );
};

export default CreateArticlePage;