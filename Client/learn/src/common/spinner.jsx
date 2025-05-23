import React, { useEffect, useState } from 'react';

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after content loads
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;