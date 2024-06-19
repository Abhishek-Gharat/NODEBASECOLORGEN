import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 , top: '40%' };

function Triangle({ data, onColorChange }) {
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

  const triangleStyle = {
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: `100px solid ${color}`, // Use the selected color for the triangle
  };

  return (
    <div className="triangle-up" style={{ ...triangleStyle, position: 'relative', padding: '10px', borderRadius: '5px', }}>
      <Handle type="target" position={Position.Top} />
      <div>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
      <Handle type="source"style={{ ...handleStyle, top: '550%',left:'50%' }} /> 
    </div>
  );
}

export default Triangle;
