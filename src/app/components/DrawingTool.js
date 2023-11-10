import React from 'react';
import PropTypes from 'prop-types';

const DrawingTool = ({ tool, onToolChange }) => {
  const handleToolChange = (event) => {
    onToolChange(event.target.value);
  };

  return (
    <select value={tool} onChange={handleToolChange}>
      <option value="pen">Pen</option>
      <option value="eraser">Eraser</option>
      <option value="highlighter">Highlighter</option>
      <option value="shape">Shape</option>
    </select>
  );
};

DrawingTool.propTypes = {
  tool: PropTypes.string.isRequired,
  onToolChange: PropTypes.func.isRequired,
};

export default DrawingTool;
