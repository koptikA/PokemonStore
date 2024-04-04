import React from 'react';
import './Registration.css';
import { Button, Form, Modal, Spinner } from 'react-bootstrap';
import { FormikField } from '../../components/FormikField/FormikField';
import { Field, Formik } from 'formik';
import { initialValues } from './initialvalues';

import { logupSelector } from './selectors';
import { logupThunk } from './thunks';

import { validationSchema } from '../login/validation';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTE_NAMES } from '../../routes/routeNames';
import { Navigate } from 'react-router-dom';

export const Registration = () => {
  const dispatch = useDispatch();

  const { isAuth, errors, isLoading } = useSelector(logupSelector);

  const handleSubmit = (values) => {
    dispatch(logupThunk(values));
    logupThunk(dispatch, values);
  };

  if (isAuth) return <Navigate to={ROUTE_NAMES.LOGIN} />;
  return (
    <div className="registration">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          return (
            <Modal show={true}>
              <Modal.Header>
                <Modal.Title>Register</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Field
                  component={FormikField}
                  type="text"
                  placeholder="Firs Name"
                  name="firstName"
                  label={'Firs Name'}
                />

                <Field
                  component={FormikField}
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  label="Last Name"
                />

                <Field
                  component={FormikField}
                  type="email"
                  placeholder="Email*"
                  name="email"
                  label="Email"
                />
                <Field
                  component={FormikField}
                  type="password"
                  placeholder="Password"
                  name="password"
                  label="Password"
                />
                <Field
                  component={FormikField}
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  label="Phone"
                />

                <Form.Check
                  type={'radio'}
                  checked={formikProps.values.gender === 'male'}
                  onChange={() => formikProps.setFieldValue('gender', 'male')}
                  id={`gender-male`}
                  label={`male`}
                  name={'gender'}
                />

                <Form.Check
                  type={'radio'}
                  checked={formikProps.values.gender === 'female'}
                  onChange={() => formikProps.setFieldValue('gender', 'female')}
                  id={`gender-female`}
                  label={`female`}
                  name={'gender'}
                />

                <Field
                  component={FormikField}
                  type="text"
                  placeholder="Address Line 1"
                  name="address.addressLine1"
                  label="Address Line 1"
                />

                <Field
                  component={FormikField}
                  type="text"
                  placeholder="Address Line 2"
                  name="address.addressLine2"
                  label="Address Line 2"
                />

                <Field
                  component={FormikField}
                  type="text"
                  placeholder="Country"
                  name="address.country"
                  label="Country"
                />

                <Field
                  component={FormikField}
                  type="text"
                  placeholder="City"
                  name="address.city"
                  label="City"
                />
                <div className="form-error-message">{errors}</div>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  disabled={isLoading || !formikProps.isValid}
                  variant="success"
                  onClick={formikProps.handleSubmit}
                >
                  {isLoading ? <Spinner animation="border" /> : 'Sign Up'}
                </Button>
              </Modal.Footer>
            </Modal>
          );
        }}
      </Formik>
    </div>
  );
};
