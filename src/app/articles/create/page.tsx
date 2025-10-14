'use client';

import { ButtonPrimary } from '@/components/base/button/primary/button-primary';
import { Input } from '@/components/base/input/input';
import { Textarea } from '@/components/base/textarea/textarea';
import { PrimaryHeading } from '@/components/typography/headings/primary-heading/primary-heading';
import { FileInput } from '@/components/base/file-input/file-input';
import useArticleForm from './use-article-form';

import { FilePreview } from '@/components/base/file-input/file-preview/file-preview';
import { Controller } from 'react-hook-form';

import style from './page.module.scss';

const CreateArticlePage = () => {
    const {
        file,
        isMutating,
        onButtonClick,
        control,
        handleSubmit,
        register,
        onDelete,
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
                    {...register('title')}
                />
                <Textarea
                    id="text"
                    label="Текст"
                    className={`${style.textarea}`}
                    {...register('text')}
                />

                <Controller
                    name="files"
                    control={control}
                    render={({ field }) => (
                        <FileInput
                            label="Добавьте изображение"
                            mimeTypes={['image/*']}
                            className={style['file-input']}
                            {...field}
                        />
                    )}
                />

                {file && <FilePreview file={file} onDelete={onDelete} />}

                <ButtonPrimary
                    type="button"
                    isLoading={isMutating}
                    className={`${style.button}`}
                    onClick={handleSubmit(onButtonClick)}
                >
                    Отправить
                </ButtonPrimary>
            </form>
        </div>
    );
};

export default CreateArticlePage;
