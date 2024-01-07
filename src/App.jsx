/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { pointsInner } from "./utils";

function App() {
  return (
    <main className="body">
      <Canvas className="canva">
        <OrbitControls />
        <directionalLight />
        {/* <pointLight position={[-10, 0, -30]} power={10.0} /> */}
        <PointCircle />
      </Canvas>
    </main>
  );
}

const PointCircle = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * .05;
  });
  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point position={point.position} key={point.idx} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        roughness={0.5}
        emissiveIntensity={0.5}
        color={color}
      />
    </Sphere>
  );
};
export default App;
