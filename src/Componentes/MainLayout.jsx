import React from 'react';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className="layout-container">
      {children}
    </div>
  );
}

export default MainLayout;