import { useState, useRef } from 'react';
import '/src/styles/Popup.css';

const DraggablePopup = ({ title, children, onClose }) => {
  const [position, setPosition] = useState({ x: window.innerWidth / 6 + Math.random() * 600, y: window.innerHeight / 3 + Math.random() * 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const popupRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    e.preventDefault();
    e.StopPropagation();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
      <div 
        className="popup-window"
        ref={popupRef}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="popup-header"
          onMouseDown={handleMouseDown}
        >
          <div className="popup-title">{title}</div>
          <button className="popup-close" onClick={onClose}>[x]</button>
        </div>
        <div className="popup-content">
          {children}
        </div>
      </div>
  );
};

export default DraggablePopup;