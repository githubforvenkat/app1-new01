import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from '@mui/material';
import PenIcon from '@mui/icons-material/Pen';
import EraserIcon from '@mui/icons-material/Eraser';
import HighlighterIcon from '@mui/icons-material/Highlighter';
import ShapeIcon from '@mui/icons-material/Shape';
import SaveIcon from '@mui/icons-material/Save';
import ImportIcon from '@mui/icons-material/Import';

const Toolbar = ({
  onToolChange,
  onSave,
  onImport,
}) => {
  return (
    <div className="toolbar">
      <Button
        variant="outlined"
        onClick={() => onToolChange('pen')}
      >
        <PenIcon />
      </Button>
      <Button
        variant="outlined"
        onClick={() => onToolChange('eraser')}
      >
        <EraserIcon />
      </Button>
      <Button
        variant="outlined"
        onClick={() => onToolChange('highlighter')}
      >
        <HighlighterIcon />
      </Button>
      <Button
        variant="outlined"
        onClick={() => onToolChange('shape')}
      >
        <ShapeIcon />
      </Button>
      <IconButton onClick={onSave}>
        <SaveIcon />
      </IconButton>
      <IconButton onClick={onImport}>
        <ImportIcon />
      </IconButton>
    </div>
  );
};

Toolbar.propTypes = {
  onToolChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
};

export default Toolbar;

