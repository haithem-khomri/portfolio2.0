import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import * as THREE from "three";

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>();
  const { themeColors } = useContext(ThemeContext);
  
  // Load Earth textures
  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    '/textures/earth_daymap.jpg',
    '/textures/earth_normal_map.jpg',
    '/textures/earth_specular_map.jpg',
    '/textures/earth_clouds.jpg'
  ]);
  
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={earthRef as React.RefObject<THREE.Mesh>} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial 
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={5}
          specular={new THREE.Color(0x333333)}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial 
          color={themeColors.accent}
          opacity={0.1}
          transparent={true}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
