/* eslint-disable no-unused-vars */
// LightingRoom.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import LightControl from './LightControl';  // This will now import the default export correctly

const LightingRoom = () => {
    const mountRef = useRef(null); // For mounting the 3D scene to the DOM
    const [lightIntensity, setLightIntensity] = useState(1);  // Set light intensity state

    useEffect(() => {
        // Setup Three.js scene here
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add objects and lighting to the scene
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const light = new THREE.DirectionalLight(0xffffff, lightIntensity); // Adjust light intensity dynamically
        scene.add(light);
        
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            // Clean up the scene when the component is unmounted
            mountRef.current.removeChild(renderer.domElement);
        };
    }, [lightIntensity]); // Re-run the effect when lightIntensity changes

    return (
        <div>
            <h2>Lighting Room</h2>
            <div ref={mountRef}></div> {/* This div will hold the Three.js scene */}
            <LightControl setLightIntensity={setLightIntensity} /> {/* Pass setLightIntensity to LightControl */}
        </div>
    );
};

export default LightingRoom;
