import { ButtonPrimary } from "@/components/base/button/primary/button-primary";
import { Input } from "@/components/base/input/input";
import { Textarea } from "@/components/base/textarea/textarea";
import { PrimaryHeading } from "@/components/typography/headings/primary-heading/primary-heading";

const CreateArticlePage = () => {
    return (
        <div>
            <PrimaryHeading>Создать статью</PrimaryHeading>
            <form>
                <Input />
                <Textarea />

                <ButtonPrimary type="submit">Submit</ButtonPrimary>
            </form>
        </div>
    );
};

export default CreateArticlePage;