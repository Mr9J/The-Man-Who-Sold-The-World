import { useGLTF } from "@react-three/drei";
import skyScene from "../3d/sky.glb";

const Sky = () => {
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
