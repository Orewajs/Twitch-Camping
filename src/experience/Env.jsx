import {
  CameraControls,
  Environment,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

const Env = () => {
  const cameraRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      cameraRef.current.setPosition(0, 2, 7, true);
    }, 2000);
  }, []);
  return (
    <>
      <CameraControls
        ref={cameraRef}
        minAzimuthAngle={-Math.PI * 0.5}
        maxAzimuthAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0}
        maxPolarAngle={Math.PI * 0.5}
        smoothTime={1}
      />
      <color attach="background" args={["#00243E"]} />
      <fog attach="fog" args={["#00243E", 10, 40]} />
      <Environment files={["/textures/venice.hdr"]} />
      <mesh rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[200, 200]}
          resolution={2048}
          mixBlur={1}
          mixStrength={5}
          roughness={1}
          depthScale={0.5}
          opacity={0.5}
          minDepthThreshold={0.4}
          maxDepthThreshold={1}
          metalness={1}
          mirror={0}
          color={"#00243E"}
        />
      </mesh>
    </>
  );
};

export default Env;
