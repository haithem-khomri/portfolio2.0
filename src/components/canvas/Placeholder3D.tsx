import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Placeholder3D = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#915eff" />
      </mesh>
    </Canvas>
  );
};

export default Placeholder3D;
