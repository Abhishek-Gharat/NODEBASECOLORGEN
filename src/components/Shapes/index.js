import React, { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import Circle from './TextUpdaterNode.js';
import Triangle from './TringleNode.js';
import Trapezoid from './Trapezoid.js';
import Rectangle from './Rectangle.js';
import 'reactflow/dist/style.css';
import './text-updater-node.css';

const nodeTypes = {
  circle: Circle,
  triangle: Triangle,
  trapezoid: Trapezoid,
  rectangle: Rectangle,
};

function ShapeFlow() {
  const [nodes, setNodes] = useState([
    { id: 'node-1', type: 'circle', position: { x: 400, y: 0 }, data: { value: 123, color: '#ff0000' } },
    { id: 'node-2', type: 'triangle', position: { x: 10, y: 10 }, data: { value: 123, color: '#00ff00' } },
    { id: 'node-3', type: 'trapezoid', position: { x: 20, y: 20 }, data: { value: 123, color: '#0000ff' } },
    {
      id: 'node-4',
      type: 'rectangle',
      position: { x: 30, y: 30 },
      data: {
        value: 123,
        text: 'Rectangle Node',
        btn: <button onClick={(e) => handleSetbtnArray()}>Click me</button>,
        btnArray: [],
        color: '#ffa500',
      },
    },
  ]);
  const [edges, setEdges] = useState([]);
  const [appBackgroundColor, setAppBackgroundColor] = useState('#B8CEFF');

  const handleSetbtnArray = () => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === 'node-4') {
          node.data.btnArray.push('Button');
        }
        return node;
      })
    );
  };

  const handleColorChange = (id, color) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data.color = color;
        }
        return node;
      })
    );
  };

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => {
      const sourceNode = nodes.find((node) => node.id === connection.source);
      const targetNode = nodes.find((node) => node.id === connection.target);

      if (sourceNode && targetNode) {
        const gradientColor = `linear-gradient(to right, ${sourceNode.data.color}, ${targetNode.data.color})`;
        setAppBackgroundColor(gradientColor);
      }

      setEdges((eds) => addEdge(connection, eds));
    },
    [nodes, setEdges]
  );

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <p style={{ textAlign: 'center', marginBottom: '10px' }}>CSS Background Color: {appBackgroundColor}</p>
      <div style={{ flex: '1', background: appBackgroundColor }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 999,
              textAlign: 'center',
              width: '100%',
            }}
          >
            <h2 style={{ margin: 0 }}>THE NODE BASE COLOR GENERATOR</h2>
          </div>
        </ReactFlow>
      </div>
    </div>
  );
}

export default ShapeFlow;
