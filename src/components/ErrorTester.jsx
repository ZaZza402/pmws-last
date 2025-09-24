// Test component to demonstrate ErrorBoundary functionality
// This component can be temporarily imported and used to test error handling
// To test: Add a button in any component that calls triggerError()

import React, { useState } from 'react';

const ErrorTester = () => {
  const [shouldError, setShouldError] = useState(false);

  const triggerError = () => {
    setShouldError(true);
  };

  // This will throw an error on the next render
  if (shouldError) {
    throw new Error('Test error triggered by ErrorTester component');
  }

  return (
    <div style={{ margin: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Error Boundary Test Component</h3>
      <p>Click the button below to test the ErrorBoundary:</p>
      <button 
        onClick={triggerError}
        style={{
          background: '#e74c3c',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Trigger Test Error
      </button>
      <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
        Note: This component is for testing purposes only. Remove it from production builds.
      </p>
    </div>
  );
};

export default ErrorTester;