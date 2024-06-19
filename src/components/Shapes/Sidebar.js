import React from 'react';

const Sidebar = ({ onDragStart }) => (
  <aside>
    <div
      className="shape"
      onDragStart={(event) => onDragStart(event, 'circle')}
      draggable
    >
      Circle
    </div>
    <div
      className="shape"
      onDragStart={(event) => onDragStart(event, 'triangle')}
      draggable
    >
      Triangle
    </div>
    <div
      className="shape"
      onDragStart={(event) => onDragStart(event, 'trapezoid')}
      draggable
    >
      Trapezoid
    </div>
    <div
      className="shape"
      onDragStart={(event) => onDragStart(event, 'rectangle')}
      draggable
    >
      Rectangle
    </div>
  </aside>
);

export default Sidebar;
