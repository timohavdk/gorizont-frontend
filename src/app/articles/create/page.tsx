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
                            value=""
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
