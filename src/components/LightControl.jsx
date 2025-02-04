// LightControl.jsx
import React from 'react';

const LightControl = ({ setLightIntensity }) => {
    const handleIntensityChange = (event) => {
        setLightIntensity(event.target.value);
    };

    return (
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
            <label>Light Intensity:</label>
            <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                onChange={handleIntensityChange}
                style={{ marginTop: 10 }}
            />
        </div>
    );
};

// Ensure you're using default export here
export default LightControl;
