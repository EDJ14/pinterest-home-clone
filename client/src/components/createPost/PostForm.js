// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';
import requireAuth from '../hoc/requireAuth';

import PostField from './PostField';
//import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

export const Container = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / -2;
`;

export const FormContainer = styled.div`
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  width: min-content;
  align-items: center;
  flex-direction: column;
  background-color: rgba(3, 3, 3, 0.2);
  border-radius: 10%;
`;

class PostForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={PostField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <Container>
        <FormContainer>
          <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
            {this.renderFields()}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Link to="/">Cancel</Link>
              <button type="submit">Next</button>
            </div>
          </form>
        </FormContainer>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  //errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a ' + name;
    }
  });

  return errors;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const date =
  months[new Date().getMonth()] +
  ' ' +
  new Date().getDate().toString() +
  ' ' +
  new Date().getFullYear().toString();

export default reduxForm({
  validate,
  form: 'postForm',
  initialValues: {
    date: date
  },
  destroyOnUnmount: false
})(withRouter(requireAuth(PostForm)));
