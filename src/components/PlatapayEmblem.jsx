import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PlatapayEmblem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Create emblem geometry
    const geometry = new THREE.CylinderGeometry(1, 1, 0.1, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xC0C0C0,
      shininess: 100,
    });
    const emblem = new THREE.Mesh(geometry, material);

    // Add logo texture
    const loader = new THREE.TextureLoader();
    loader.load('/images/platapay-logo.png', (texture) => {
      const logoMaterial = new THREE.MeshPhongMaterial({
        map: texture,
        transparent: true,
      });
      const logoGeometry = new THREE.PlaneGeometry(1.8, 1.8);
      const logo = new THREE.Mesh(logoGeometry, logoMaterial);
      logo.position.set(0, 0, 0.06);
      emblem.add(logo);

      const backLogo = logo.clone();
      backLogo.position.set(0, 0, -0.06);
      backLogo.rotation.y = Math.PI;
      emblem.add(backLogo);
    });

    scene.add(emblem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      emblem.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '200px', height: '200px', margin: '0 auto' }} />;
};

export default PlatapayEmblem;