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

    // Payment Gateway Elements
    const createCreditCard = () => {
      const cardGeometry = new THREE.BoxGeometry(4, 2.5, 0.2);
      const cardMaterial = new THREE.MeshPhongMaterial({ color: 0x1e3a8a, shininess: 100 });
      const card = new THREE.Mesh(cardGeometry, cardMaterial);
      return card;
    };

    const createCurrencySymbol = () => {
      const loader = new THREE.FontLoader();
      return new Promise((resolve) => {
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
          const textGeometry = new THREE.TextGeometry('₱', {
            font: font,
            size: 2,
            height: 0.2,
          });
          const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
          const currencySymbol = new THREE.Mesh(textGeometry, textMaterial);
          resolve(currencySymbol);
        });
      });
    };

    const createTransactionIcon = () => {
      const iconGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
      const iconMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 100 });
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      return icon;
    };

    // Create and add elements to the scene
    const card = createCreditCard();
    scene.add(card);

    createCurrencySymbol().then((currencySymbol) => {
      currencySymbol.position.set(-5, 0, 0);
      scene.add(currencySymbol);
    });

    const transactionIcon = createTransactionIcon();
    transactionIcon.position.set(5, 0, 0);
    scene.add(transactionIcon);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      card.rotation.y += 0.01;
      transactionIcon.rotation.z += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '400px' }} />;
};

export default ThreeDAnimation;