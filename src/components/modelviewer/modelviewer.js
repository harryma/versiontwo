import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import GltfModel from "./gltf";
// import * as THREE from "three";

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas camera={{ position: [4.2, 2.2, 5], zoom: 2.05 }}>
      <CameraShake
        yawFrequency={0.04}
        pitchFrequency={0.03}
        rollFrequency={0.07}
        maxYaw={0.25}
        maxPitch={0.25}
        maxRoll={0.25}
        intensity={0.5}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls
        // minZoom={1}
        // maxZoom={1}
        // maxDistance={20}
        // position={100}
        maxAzimuthAngle={Math.PI * 5}
        minAzimuthAngle={Math.PI / 5}
        maxPolarAngle={Math.PI}
        minPolarAngle={Math.PI / 10}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
