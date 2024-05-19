import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";
import SmolHoloMyth from "@/assets/models/SmolHoloMyth";
import Sky from "@/assets/models/Sky";
import Mumei from "@/assets/models/Mumei";
import Star from "@/assets/models/Star";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */
}
const Homepage = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustSmolHoloMythForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -10, -20];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [5, 5, 5];
    } else {
      screenScale = [10, 10, 10];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustStarForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0.5, -5.5, 1];

    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5];
    } else {
      screenScale = [5, 5, 5];
    }

    return [screenScale, screenPosition];
  };

  const [holomythScale, holomythPosition, holomythRotation] =
    adjustSmolHoloMythForScreenSize();
  const [starScale, starPosition] = adjustStarForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? " cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Mumei />
          <Sky />
          <SmolHoloMyth
            position={holomythPosition}
            scale={holomythScale}
            rotation={holomythRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Star
            isRotating={isRotating}
            scale={starScale}
            position={starPosition}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Homepage;
