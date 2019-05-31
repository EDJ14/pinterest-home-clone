// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as actions from '../../actions';

import { Container, FormContainer } from './PostForm';

const PostFormReview = ({ onCancel, formValues, submitPost, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <Container>
      <FormContainer>
        <h5>Please confirm your entries</h5>
        {reviewFields}
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => submitPost(formValues, history)}
          className="green btn-flat right white-text"
        >
          Send Survey
        </button>
      </FormContainer>
    </Container>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.postForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(PostFormReview));
