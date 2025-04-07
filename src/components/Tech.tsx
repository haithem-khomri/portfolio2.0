import { motion } from "framer-motion";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

const TechIcon = ({
  icon: Icon,
  name,
  delay,
  color,
}: {
  icon: any;
  name: string;
  delay: number;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center gap-2"
    whileHover={{ scale: 1.1 }}
  >
    <div
      className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#915eff]/50"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon className="w-12 h-12" style={{ color: color }} />
    </div>
    <p className="text-white text-sm font-medium">{name}</p>
  </motion.div>
);

const FloatingGeometry = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 2, 0]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[3, -2, 0]}>
          <dodecahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.2}>
        <mesh position={[0, -3, 0]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
      </Float>
    </>
  );
};

const Tech = () => {
  const technologies = [
    { icon: SiC, name: "C", color: "#A8B9CC" },
    { icon: SiCplusplus, name: "C++", color: "#00599C" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
    { icon: SiGit, name: "Git", color: "#F05032" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-bold text-white mb-16"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {technologies.map((tech, index) => (
          <TechIcon
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            delay={index * 0.1}
            color={tech.color}
          />
        ))}
      </motion.div>

      <div className="h-[400px] w-full mt-16 opacity-50">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingGeometry />
        </Canvas>
      </div>
    </div>
  );
};

export default Tech;
