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
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Geometries and Materials for Multiple Objects
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 32),
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.7),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xff00ff, shininess: 100 }), // Magenta
      new THREE.MeshPhongMaterial({ color: 0x00ffff, shininess: 100 }), // Cyan
      new THREE.MeshPhongMaterial({ color: 0xffff00, shininess: 100 }), // Yellow
      new THREE.MeshPhongMaterial({ color: 0xff8000, shininess: 100 }), // Orange
      new THREE.MeshPhongMaterial({ color: 0x8000ff, shininess: 100 }), // Purple
    ];

    const objects = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      scene.add(mesh);
      return mesh;
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      objects.forEach((object, index) => {
        object.rotation.x += 0.01 * (index + 1);
        object.rotation.y += 0.01 * (index + 1);

        // Roaming and flying effect
        object.position.x = Math.sin(Date.now() * 0.001 * (index + 1)) * 5;
        object.position.y = Math.cos(Date.now() * 0.001 * (index + 1)) * 5;
        object.position.z = Math.sin(Date.now() * 0.001 * (index + 1) + Math.PI / 2) * 5;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Flashy effect
    const flashyEffect = () => {
      objects.forEach((object) => {
        object.material.color.setHex(Math.random() * 0xffffff);
      });
    };

    const flashInterval = setInterval(flashyEffect, 500); // Change colors every 500ms

    // Cleanup
    return () => {
      clearInterval(flashInterval);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default ThreeDAnimation;