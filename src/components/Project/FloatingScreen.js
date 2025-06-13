import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './FloatingScreen.css'; // Import your CSS for styling

const FloatingScreen = ({ title, image, github,description}) => {
  const mountRef = useRef(null); // Create a ref to mount the Three.js scene

  useEffect(() => {
    const currentRef = mountRef.current;
    const scene = new THREE.Scene();// Create a new scene
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Create a perspective camera
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(200, 200); // Set the size of the renderer
    currentRef.appendChild(renderer.domElement);// Append the renderer to the current ref
    renderer.setPixelRatio(window.devicePixelRatio); // Set pixel ratio for better quality

    const geometry = new THREE.BoxGeometry(4.2, 5.2, 0.1); // Like a flat screen
    const texture = new THREE.TextureLoader().load(image); // Load the image as a texture
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });// Use the texture as a material
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5; // Position the camera so we can see the cube

    const animate = () => {
      requestAnimationFrame(animate);// Call animate recursively
      cube.rotation.y += 0.01;


      renderer.render(scene, camera);// Render the scene from the perspective of the camera
    };

    animate();

    return () => {
      currentRef.removeChild(renderer.domElement); // Clean up the renderer when the component unmounts
      renderer.dispose(); // Dispose of the renderer to free up resources
    };
  }, [image]);

  return (
    <div className="floating-screen text-center">
      <div ref={mountRef}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" >View on GitHub</a>
    </div>
  );
};

export default FloatingScreen;
