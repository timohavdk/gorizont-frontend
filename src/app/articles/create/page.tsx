'use client';

import { Controller } from 'react-hook-form';
import { ButtonPrimary } from '@/components/base/button/primary/button-primary';
import { FileInput } from '@/components/base/file-input/file-input';
import { FilePreview } from '@/components/base/file-input/file-preview/file-preview';
import { Input } from '@/components/base/input/input';
import { Textarea } from '@/components/base/textarea/textarea';
import { PrimaryHeading } from '@/components/typography/headings/primary-heading/primary-heading';
import style from './page.module.scss';
import useArticleForm from './use-article-form';

const CreateArticlePage = () => {
    const {
        errors,
        file,
        isMutating,
        onSubmit,
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
            <form className={`${style.form}`} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="title"
                    label="Заголовок"
                    {...register('title')}
                />
                {!!errors.title?.message && <span>{errors.title.message}</span>}
                <Textarea
                    id="text"
                    label="Текст"
                    className={`${style.textarea}`}
                    {...register('text')}
                />
                {!!errors.text?.message && <span>{errors?.text.message}</span>}
                <Controller
                    name="files"
                    control={control}
                    render={({ field }) => (
                        <FileInput
                            label="Добавьте изображение"
                            mimeTypes={['image/*']}
                            className={style['file-input']}
                            {...field}
                            value=""
                        />
                    )}
                />

                {file && <FilePreview file={file} onDelete={onDelete} />}
                {!!errors.files?.message && <span>{errors?.files.message}</span>}
                <ButtonPrimary
                    type="submit"
                    isLoading={isMutating}
                    className={`${style.button}`}
                >
                    Отправить
                </ButtonPrimary>
            </form>
        </div>
    );
};

export default CreateArticlePage;
