import { Form } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

export const FormikField = ({ field, label, ...props }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...field} {...props} />
      <ErrorMessage name={field.name}>
        {(msg) => <div className="form-error-message">{msg}</div>}
      </ErrorMessage>
    </Form.Group>
  );
};
