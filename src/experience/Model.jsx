import { useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/models/camping.glb");

  return <primitive object={model.scene} />;
};

export default Model;

useGLTF.preload("/models/camping.glb");
