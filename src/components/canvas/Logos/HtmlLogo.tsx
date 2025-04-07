import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Center, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export function HtmlLogo({ scale = 1 }) {
  const groupRef = useRef<THREE.Group>(null);
  const { themeColors } = useContext(ThemeContext);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Load the HTML5 logo texture
  const texture = useTexture('/logos/html5.png');
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Faster rotation when clicked
      const rotationSpeed = clicked ? 1.0 : 0.5;
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * rotationSpeed) * 0.3;
      
      // Add some bounce when hovered
      if (hovered) {
        groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.05;
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      scale={[scale, scale, scale]}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <Center>
          {/* Logo as a textured plane */}
          <mesh 
            position={[0, 0, 0]} 
            castShadow
            scale={hovered ? 1.1 : 1}
          >
            <planeGeometry args={[1.5, 1.5]} />
            <meshBasicMaterial 
              map={texture} 
              transparent={true}
              alphaTest={0.1}
            />
          </mesh>
          
          {/* Glow effect */}
          <pointLight 
            color="#E34F26" 
            intensity={hovered ? 1.2 : 0.8} 
            distance={2} 
            position={[0, 0, 0.5]} 
          />
          <pointLight 
            color="#F06529" 
            intensity={hovered ? 0.6 : 0.4} 
            distance={1} 
            position={[0.5, 0.5, 0.2]} 
          />
        </Center>
      </Float>
    </group>
  );
}