import React, { useRef, usestate } from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../../scss/style.scss";
import { Scene } from "three";

function Model() {
  const loader = new GLTFLoader();
  loader.load("macbook.gltf", function (gltf) {
    Scene.add(gltf.scene);
  });
}

const Macbook = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Model />
    </Canvas>
  );
};

export default Macbook;
