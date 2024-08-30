import { TextInput } from '@mantine/core'
import { Formik } from 'formik'
import { useRef } from 'react'
import * as yup from 'yup'
import { URL_REGEX } from '@/lib/urlRegex'

const validationSchema = yup.object().shape({
    url: yup
        .string()
        .matches(URL_REGEX, 'Enter a valid url!')
        .min(5, 'Too Short')
})

export const LinkInput = ({ onLink }: { onLink(url: string): void }) => {
    const ref = useRef<HTMLElement>(null)

    return (
        <section ref={ref} className='linkButton'>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ url: '' }}
                onSubmit={({ url }) => onLink(url)}
            >
                {({ handleSubmit, handleChange, handleBlur, errors }) => (
                    <form onSubmit={handleSubmit} className="p-2">
                        <TextInput
                            type="text"
                            name="url"
                            placeholder="Enter or paste a link"
                            data-cy="link-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='linkInput'
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
        </section>
    )
}
