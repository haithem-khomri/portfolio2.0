import { OrbitControls } from "@react-three/drei";
import { TensorFlowLogo } from "./Logos/TensorFlowLogo";
import { PyTorchLogo } from "./Logos/PyTorchLogo";
import { useTheme } from "../../hooks/useTheme";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  Float,
  Environment,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { useContext, Suspense, useMemo } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HtmlLogo } from "./Logos/HtmlLogo";
import { GoogleLogo } from "./Logos/GoogleLogo";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Stars = (props: JSX.IntrinsicElements["group"]) => {
  const { themeColors } = useContext(ThemeContext);
  const ref = useRef();

  // Create a valid sphere with no NaN values
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const radius = 4;

    for (let i = 0; i < positions.length; i += 3) {
      // Generate random points in a sphere
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.pow(Math.random(), 1 / 3); // Cube root for uniform distribution

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      (ref.current as THREE.Points).rotation.x -= delta / 15;
      (ref.current as THREE.Points).rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref as unknown as React.MutableRefObject<THREE.Points>}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={themeColors.accent}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const CameraRig = ({ children }) => {
  const { themeColors } = useContext(ThemeContext);
  const groupRef = useRef<THREE.Group>();

  useFrame(({ clock, mouse }) => {
    if (groupRef.current) {
      // Gentle camera movement based on mouse position
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mouse.x * 0.5,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        mouse.y * 0.2,
        0.05
      );

      // Subtle rotation
      groupRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>}>{children}</group>
  );
};

// Add this new component for animated logo movement
// Enhanced AnimatedLogo component with mouse control
const AnimatedLogo = ({ children, initialPosition, speed = 0.5 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const direction = useRef(new THREE.Vector3(
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 0.5 - 0.25
  ).normalize().multiplyScalar(speed));
  
  const bounds = { x: 3, y: 2, z: 1 };
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  useFrame(({ clock, mouse, camera }) => {
    if (groupRef.current) {
      if (isDragging) {
        // Convert mouse position to world space
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        
        // Apply the position with the initial drag offset
        groupRef.current.position.x = pos.x - dragOffset.x;
        groupRef.current.position.y = pos.y - dragOffset.y;
      } else {
        // Regular autonomous movement when not being dragged
        groupRef.current.position.x += direction.current.x * 0.005;
        groupRef.current.position.y += direction.current.y * 0.005;
        groupRef.current.position.z += direction.current.z * 0.005;
        
        // Bounce when hitting boundaries
        if (Math.abs(groupRef.current.position.x) > bounds.x) {
          direction.current.x *= -1;
        }
        if (Math.abs(groupRef.current.position.y) > bounds.y) {
          direction.current.y *= -1;
        }
        if (Math.abs(groupRef.current.position.z) > bounds.z) {
          direction.current.z *= -1;
        }
      }
      
      // Add slight rotation for more natural movement
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    
    // Calculate and store the offset between mouse position and object position
    if (groupRef.current) {
      const mouseX = (e.point.x);
      const mouseY = (e.point.y);
      const objectX = groupRef.current.position.x;
      const objectY = groupRef.current.position.y;
      
      setDragOffset({
        x: mouseX - objectX,
        y: mouseY - objectY
      });
    }
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <group 
      ref={groupRef} 
      position={initialPosition}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {children}
    </group>
  );
};

const LogoScene = () => {
  const { themeColors } = useContext(ThemeContext);

  return (
    <CameraRig>
      <AnimatedLogo initialPosition={[-2, 0.5, 0]} speed={0.3}>
        <TensorFlowLogo scale={0.5} />
      </AnimatedLogo>

      <AnimatedLogo initialPosition={[0, -0.5, 0]} speed={0.4}>
        <PyTorchLogo scale={0.5} />
      </AnimatedLogo>

      <AnimatedLogo initialPosition={[2, 0.5, 0]} speed={0.35}>
        <HtmlLogo scale={0.5} />
      </AnimatedLogo>

      <AnimatedLogo initialPosition={[0, 1.5, 0]} speed={0.25}>
        <GoogleLogo scale={0.5} />
      </AnimatedLogo>

      {/* Add sparkles for a magical effect */}
      <Sparkles
        count={50}
        scale={10}
        size={1}
        speed={0.3}
        color={themeColors.accent}
      />

      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={0.2}
        color={themeColors.accent}
      />
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={0.8}
        intensity={0.8}
        castShadow
        color={themeColors.accent}
      />
    </CameraRig>
  );
};

const HeroScene = () => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 15]} />
        <Stars />
        <LogoScene />
        <Environment preset="night" />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeroScene;
