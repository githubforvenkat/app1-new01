import React, { useState, useEffect } from 'react';

const Canvas = () => {
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState('pen');

  useEffect(() => {
    const canvasElement = document.querySelector('#canvas');
    setCanvas(canvasElement);

    const ctxElement = canvasElement.getContext('2d');
    setCtx(ctxElement);
  }, []);

  const onMouseDown = (event) => {
    if (event.button === 0) {
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(event.offsetX, event.offsetY);
    }
  };

  const onMouseMove = (event) => {
    if (isDrawing) {
      switch (currentTool) {
        case 'pen':
          ctx.lineTo(event.offsetX, event.offsetY);
          ctx.stroke();
          break;
        case 'eraser':
          ctx.fillStyle = 'white';
          ctx.fillRect(event.offsetX - 10, event.offsetY - 10, 20, 20);
          break;
        default:
          break;
      }
    }
  };

  const onMouseUp = (event) => {
    if (isDrawing) {
      ctx.closePath();
      setIsDrawing(false);
    }
  };

  const onToolChange = (event) => {
    setCurrentTool(event.target.value);
  };

  return (
    <div>
      <select value={currentTool} onChange={onToolChange}>
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <canvas
        id="canvas"
        width="600"
        height="400"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      />
    </div>
  );
};

export default Canvas;
