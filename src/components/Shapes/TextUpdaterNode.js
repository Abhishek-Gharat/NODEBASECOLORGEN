import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10, top: '40%' }; // Adjust top value as needed

function Circle({ data, onColorChange }) {
  const [color, setColor] = useState(data.color || '#000000');

  const handleColorChange = useCallback(
    (e) => {
      const newColor = e.target.value;
      setColor(newColor);
      data.color = newColor; // Update node data color
      onColorChange(data.id, newColor); // Notify parent component of the change
    },
    [onColorChange, data]
  );

  return (
    <div className="circle" style={{ backgroundColor: color, padding: '10px', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <Handle type="target" position={Position.Top} style={{ ...handleStyle, left: '25%' }} /> {/* Adjust target handle position */}
      <div>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
      <Handle type="source" position={{ x: 0.2, y: 1.0 }} style={{ ...handleStyle, top: '50%',left:'70%' }} /> 
      </div>
  
  );
}

export default Circle;
