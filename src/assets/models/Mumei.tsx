import React from "react";
import mumeiScene from "../3d/mumei.glb";
import { useGLTF } from "@react-three/drei";

const Mumei = () => {
  //   const { scene, animations } = useGLTF(mumeiScene);
  const { scene, animations } = useGLTF(mumeiScene);

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Mumei;
