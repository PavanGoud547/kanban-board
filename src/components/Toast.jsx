import React, { useEffect, useState } from 'react';
import { FiCheck, FiAlertTriangle, FiInfo } from 'react-icons/fi';

const Toast = ({ message, type = 'info' }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2700); // Slightly less than the parent timeout to allow for fade-out
    
    return () => clearTimeout(timer);
  }, []);
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheck />;
      case 'error':
        return <FiAlertTriangle />;
      default:
        return <FiInfo />;
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={`toast ${type}`} style={{ opacity: isVisible ? 1 : 0 }}>
      {getIcon()}
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;