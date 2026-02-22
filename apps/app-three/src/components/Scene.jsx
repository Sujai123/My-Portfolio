import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, ContactShadows, Stars, ScrollControls, useScroll } from "@react-three/drei";
import { Suspense, useRef } from "react";

const AbstractGeometry = () => {
  const group = useRef();
  const scroll = useScroll();

  // Tie the group's rotation to the scroll position
  useFrame(({ clock }) => {
    // Base slow rotation plus scroll-based rotation
    const scrollOffset = scroll.offset; // 0 at top, 1 at bottom
    group.current.rotation.y = clock.getElapsedTime() * 0.05 + scrollOffset * Math.PI * 2;
    group.current.position.y = scrollOffset * 5 - 2.5; // Move up overall as user scrolls down to stay in view
  });

  return (
    <group ref={group}>
      {/* Primary Hero Shape */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[2, 1, -2]}>
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <MeshTransmissionMaterial
            color="#8352FD"
            transmission={0.95}
            thickness={1}
            roughness={0.1}
            ior={1.5}
            chromaticAberration={0.05}
          />
        </mesh>
      </Float>

      {/* Secondary Shape */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-4, -2, -4]}>
        <mesh>
          <torusGeometry args={[1, 0.3, 16, 64]} />
          <MeshTransmissionMaterial
            color="#00e5ff"
            transmission={0.9}
            thickness={0.5}
            roughness={0}
            ior={1.2}
          />
        </mesh>
      </Float>

      {/* Tertiary Shape */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[5, -4, -3]}>
        <mesh>
          <octahedronGeometry args={[1.2]} />
          <MeshTransmissionMaterial
            color="#ff00ff"
            transmission={0.9}
            thickness={0.2}
            roughness={0.2}
            ior={1.4}
          />
        </mesh>
      </Float>

      {/* Quaternary Shape */}
      <Float speed={1} rotationIntensity={3} floatIntensity={1} position={[-3, 4, -5]}>
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <MeshTransmissionMaterial
            color="#ffffff"
            transmission={1}
            thickness={0.1}
            roughness={0}
            ior={1.1}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <Suspense fallback={null}>
        {/* Adds a subtle starfield background within the 3D space */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        {/* Dynamic lighting for the glass materials */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#00ff7f" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#00e5ff" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />

        <ScrollControls pages={3} damping={0.25} distance={1}>
          <AbstractGeometry />
        </ScrollControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={15} blur={2.5} far={4} color="#00ff7f" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
