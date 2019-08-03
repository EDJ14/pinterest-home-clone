// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontSize: '2rem' }}>{label}</label>
      <input
        {...input}
        style={{ marginBottom: '5px', display: 'block', height: '4.5rem' }}
      />
      <div style={{ marginBottom: '2rem', color: 'red', fontSize: '1.5rem' }}>
        {touched && error}
      </div>
    </div>
  );
};
