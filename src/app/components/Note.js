import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ title, content }) => {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
