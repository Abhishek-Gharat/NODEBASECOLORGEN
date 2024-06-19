import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Rectangle({ data, onColorChange }) {
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
    <div className="rectangle" style={{ backgroundColor: color, padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <div>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
    </div>
  );
}

export default Rectangle;
