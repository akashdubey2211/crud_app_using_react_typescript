import React from 'react';
import { Field, FieldProps } from 'formik';
import { OwnInnerFieldProps } from '../PostForm/PostForm';
import '../styles/style.css'

const TextField: React.FunctionComponent<OwnInnerFieldProps> = ({
    firstname,
    field,
    lastname,
    form
}) => {
    return (
        <div className="container">
            <label htmlFor="title">First Name</label>
            <Field type="text" name="firstname" placeholder="first name" className="inputField"/>
            <label htmlFor="title">Last Name</label>
            <Field type="text" name="lastname" placeholder="last name" className="inputField"/>
            <label htmlFor="title">Age</label>
            <Field type="number" name="age" placeholder="age" className="inputField"/>
            <label htmlFor="title">Mobile Number</label>
            <Field type="number" name="number" placeholder="number" className="inputField"/>
        </div>
    );
};

export default TextField;
