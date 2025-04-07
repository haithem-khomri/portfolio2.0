import * as THREE from "three";

export const createEnhancedMaterial = (
  color: string,
  options: {
    metalness?: number;
    roughness?: number;
    clearcoat?: number;
    transmission?: number;
    opacity?: number;
    emissiveIntensity?: number;
  } = {}
) => {
  const material = new THREE.MeshPhysicalMaterial({
    color,
    metalness: options.metalness ?? 0.9,
    roughness: options.roughness ?? 0.1,
    clearcoat: options.clearcoat ?? 1,
    clearcoatRoughness: 0.1,
    transmission: options.transmission ?? 0,
    transparent: options.opacity !== undefined,
    opacity: options.opacity,
    envMapIntensity: 2,
    emissive: new THREE.Color(color),
    emissiveIntensity: options.emissiveIntensity ?? 0.2,
  });

  return material;
};

export const createGlowMaterial = (color: string) => {
  return new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(color) },
      glowColor: { value: new THREE.Color(color) },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform vec3 glowColor;
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
        vec3 glow = glowColor * intensity;
        vec3 finalColor = mix(color, glow, 0.5 + sin(time) * 0.2);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
  });
}; 