import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          autoRotate 
          autoRotateSpeed={2} 
        />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
