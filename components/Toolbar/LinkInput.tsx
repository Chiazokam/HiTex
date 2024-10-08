import { TextInput } from '@mantine/core'
import { Formik } from 'formik'
import * as yup from 'yup'
import { URL_REGEX } from '@/lib/utils/urlRegex'

const validationSchema = yup.object().shape({
    url: yup
        .string()
        .matches(URL_REGEX, 'Enter a valid url!')
        .min(5, 'Too Short')
})

export const LinkInput = ({ onLink, setOpened }: { onLink(url: string): void; setOpened: (opened:boolean) => void }) => {

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{ url: '' }}
            onSubmit={({ url }) => {
                onLink(url)
                setOpened(false)
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, errors }) => (
                <form onSubmit={handleSubmit} className="p-2">
                    <TextInput
                        type="text"
                        name="url"
                        classNames={{
                            root: 'w-[250px]'
                        }}
                        placeholder="Input a link and press Enter"
                        data-cy="link-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                            errors.url
                                ? `${errors.url}. For example: https://xyz.com`
                                : false
                        }
                        autoFocus
                    />
                </form>
            )}
            </Formik>
    )
}
