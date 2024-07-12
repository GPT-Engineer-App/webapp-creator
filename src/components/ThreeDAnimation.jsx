import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    mount.appendChild(renderer.domElement);

    // Geometry and Materials for Payment Elements
    const geometries = [
      new THREE.BoxGeometry(), // Credit Card
      new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32), // Coin
      new THREE.SphereGeometry(0.5, 32, 32), // Dollar Sign
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue for Credit Card
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow for Coin
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green for Dollar Sign
    ];

    const paymentElements = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      scene.add(mesh);
      return mesh;
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      paymentElements.forEach((element, index) => {
        element.rotation.x += 0.01 * (index + 1);
        element.rotation.y += 0.01 * (index + 1);
      });
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default ThreeDAnimation;