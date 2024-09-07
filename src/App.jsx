import { Canvas } from "@react-three/fiber";
import Index from "./experience/Index";

function App() {
  return (
    <section className="h-screen">
      <Canvas
        camera={{
          position: [5, 5, 30],
          fov: 35,
          near: 0.1,
          far: 1000,
        }}
      >
        <Index />
      </Canvas>
    </section>
  );
}

export default App;
