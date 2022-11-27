import React from 'react';
import { Field, FieldProps, Formik, FormikErrors, FormikProps } from 'formik';
import { number, object, string } from 'yup';
import TextField from '../TextField/TextField';
import { Post } from '../../reducers/postsReducer';
import '../styles/style.css'
export interface FormValues {
    firstname:string;
    age:number;
    number:number;
    lastname :string;
}

export type OwnPostFormProps = {
    onSubmit: (post: Post) => void;
    initialValues: FormValues;
    currentPost?: Post;
};

export type OwnInnerFieldProps = FieldProps<FormValues> & FormValues;

export const PostForm: React.FunctionComponent<OwnPostFormProps> = props => {
    const enchanceId = (values: FormValues): Post => {
        return {
            ...values,
            id: props.currentPost
                ? props.currentPost.id
                : Math.round(Math.random() * 10e4)
        };
    };

    return (
        <div className='form-container'>
            <Formik
                initialValues={props.initialValues}
                onSubmit={(values: FormValues) =>
                    props.onSubmit(enchanceId(values))
                }
                validationSchema={object().shape({
                age: string()
                        .required('Entering your age is required.')
                        .min(2, 'Minimum 2'),
                number: string()
                        .required('Entering your number is required.')
                        .min(10, 'Minimum 10')
                })}
                render={({
                    touched,
                    handleSubmit
                }: FormikProps<FormValues>) => (
                    <form onSubmit={handleSubmit} className="form-container">
                        <h3 className='form-title'>
Add User Details
                        </h3>
                        <Field
                            name="firstname"
                            render={(innerProps: OwnInnerFieldProps) => (
                                <TextField {...innerProps} firstname="firstname" />
                            )}
                        />
                        
                        <button className="submit-button" type="submit">
                            Submit
                        </button>
                    </form>
                )}
            />
        </div>
    );
};
