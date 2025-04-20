import { useState, useRef, useLayoutEffect } from 'react';
import '/src/styles/Popup.css';

const DraggablePopup = ({ title, children, onClose }) => {
  const popupRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);

  useLayoutEffect(() => {
    const popup = popupRef.current;
    if (popup) {
      const popupWidth = popup.offsetWidth;
      const popupHeight = popup.offsetHeight;

      const centerX = (window.innerWidth - popupWidth) / 2;
      const centerY = (window.innerHeight - popupHeight) / 2;

      const offsetX = Math.random() * 100 - 50;
      const offsetY = Math.random() * 100 - 50;

      const x = Math.max(0, centerX + offsetX);
      const y = Math.max(0, centerY + offsetY);

      setPosition({ x, y });
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const popup = popupRef.current;
    if (!popup) return;

    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let newX = e.clientX - dragOffset.x;
    let newY = e.clientY - dragOffset.y;

    newX = Math.max(0, Math.min(newX, windowWidth - popupWidth));
    newY = Math.max(0, Math.min(newY, windowHeight - popupHeight));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div
      className={`popup-window ${isClosing ? 'fade-out' : ''}`}
      ref={popupRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'absolute'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="popup-header" onMouseDown={handleMouseDown}>
        <div className="popup-title">{title}</div>
        <button className="popup-close" onClick={handleClose}>[x]</button>
      </div>
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default DraggablePopup;