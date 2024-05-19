import React from "react";
import starScene from "../3d/star.glb";
import { useGLTF } from "@react-three/drei";

const Star = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(starScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Star;
