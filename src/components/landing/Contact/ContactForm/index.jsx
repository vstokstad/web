import React from 'react';
import { ErrorMessage, FastField, Form, withFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from '../../../common';
import { Center, Error, InputField } from './styles';
import 'react-google-recaptcha-v3';

const ContactForm = ({ isSubmitting, values, errors, touched }) => {

  return <>
    <Form
      name='Contact'
      method='POST'
      action='https://getform.io/f/570b4aa7-9d04-490f-a87f-6c5d42c68720'
      id='ContactForm'
    >
      <InputField>
        <Input
          as={FastField}
          type='text'
          name='name'
          component='input'
          aria-label='name'
          placeholder='Full name*'
          error={touched.name && errors.name}
        />
        <ErrorMessage component={Error} name='name' />
      </InputField>
      <InputField>
        <Input
          id='email'
          aria-label='email'
          component='input'
          as={FastField}
          type='email'
          name='email'
          placeholder='Email*'
          error={touched.email && errors.email}
        />
        <ErrorMessage component={Error} name='email' />
      </InputField>
      <InputField>
        <Input
          as={FastField}
          component='textarea'
          aria-label='message'
          id='message'
          rows='8'
          type='text'
          name='message'
          placeholder='Message*'
          error={touched.message && errors.message}
        />
        <ErrorMessage component={Error} name='message' />
      </InputField>
        <input type='hidden' id='captchaResponse' name='g-recaptcha-response' />

      {values.success && <InputField>
        <Center>
          <h4>
            Your message has been successfully sent, I will get back to you
            ASAP!
          </h4>
        </Center>
      </InputField>}
      <Center>
        <Button
          secondary
          type="submit"
          data-sitekey='6LftVPUZAAAAAIwqTEu14G3I4gUVmE33M_HoFZLW'
          action="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Center>
    </Form>
  </>;
};


export default withFormik({

  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    success: false,
  }),

  validationSchema: () => {
    return Yup.object().shape({
      name: Yup.string().required(`Full name field is required`),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    });
  },

  handleSubmit: async ({ name, email, message, e },
                       { setSubmitting, resetForm, setFieldValue }) => {

    try {
      const encode = (data) =>
        Object.keys(data)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
          )
          .join('&');
      await fetch('https://getform.io/f/570b4aa7-9d04-490f-a87f-6c5d42c68720', {
        method: 'POST',
        action: 'https://getform.io/f/570b4aa7-9d04-490f-a87f-6c5d42c68720',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'Contact',
          name, email, message
        }),
      }).then((r) => console.log('Success form send.'));

      await setSubmitting(false);
      await setFieldValue('success', true);
      setTimeout(() => resetForm(), 1000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
      alert('Something went wrong, please try again!'); // eslint-disable-line
    }
  },
})(ContactForm);