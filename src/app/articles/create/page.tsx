'use client';

import { Controller } from 'react-hook-form';
import { ButtonPrimary } from '@/components/base/button/primary/button-primary';
import { Field } from '@/components/base/form/field/field';
import { FileInput } from '@/components/base/form/file-input/file-input';
import { FilePreview } from '@/components/base/form/file-input/file-preview/file-preview';
import { Input } from '@/components/base/form/input/input';
import { Textarea } from '@/components/base/form/textarea/textarea';
import { PrimaryHeading } from '@/components/typography/headings/primary-heading/primary-heading';
import style from './page.module.scss';
import useArticleForm from './use-article-form';

const CreateArticlePage = () => {
    const {
        file,
        errors,
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
                <Field slots={{ error: errors.title?.message }}>
                    <Input
                        id="title"
                        label="Заголовок"
                        {...register('title')}
                    />
                </Field>

                <Field slots={{ error: errors.text?.message }}>
                    <Textarea
                        id="text"
                        label="Текст"
                        className={`${style.textarea}`}
                        {...register('text')}
                    />
                </Field>

                <Field slots={{ error: errors?.file?.message }}>
                    <Controller
                        name="file"
                        control={control}
                        render={({ field: { onChange, ...fields } }) => {
                            return (
                                <FileInput
                                    label="Добавьте изображение"
                                    mimeTypes={['image/*']}
                                    className={style['file-input']}
                                    onChange={(files) => {
                                        onChange(files[0]);
                                    }}
                                    {...fields}
                                    value=""
                                />
                            );
                        }}
                    />
                    {file && <FilePreview file={file} onDelete={onDelete} />}
                </Field>

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
