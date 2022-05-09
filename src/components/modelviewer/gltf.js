import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);
  // const deg2rad = (degrees) => degrees * (Math.PI / 180);

  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.y * -100, 500, 750), 0.15);
    camera.far = 100000;
    camera.updateProjectionMatrix();
    // camera.lookAt(new THREE.Vector3(1, 1, 1));
    // camera.rotation.set(deg2rad(0), 0, 0);
    ref.current.position.lerp(
      vec.set(-mouse.x * 0.0, -mouse.y * 0.0, 0.02),
      0.05
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (mouse.x * Math.PI) / 25,
      0.05
    );
  });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        // onPointerOver={(event) => hover(true)}
        // onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

export default GltfModel;
