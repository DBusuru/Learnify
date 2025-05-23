import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ paddingTop: '100px' }}>  {/* Increased from 74px to 85px */}
      {children}
    </div>
  );
};

export default Layout;