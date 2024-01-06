import "./App.css";

import {
  BakeShadows,
  OrbitControls,
  Environment,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DiningChair from "./assets/config/model/New_dining_chair";
import { Suspense } from "react";
import { useState } from "react";

function App() {

  const [angel, setAngel] = useState(3);
  console.log(angel)

  return (
    <>
      <div className="config">
        <h1>Official Demo: Product Showcasing</h1>
        <div className="config-cont">
          <div className="canvas">
            <Canvas
              camera={{ fov: 25, near: 0.1, far: 1000, position: [angel, 0, 5] }}
            >
              <Suspense fallback={null}>
                <Stage environment={null} intensity={5}>
                  <Environment files="src/assets/config/hdrEnv/hdr.hdr" />
                  <DiningChair />
                </Stage>
                <BakeShadows />
                <OrbitControls
                  enableDamping={false}
                  makeDefault
                  autoRotate
                  autoRotateSpeed={0.5}
                  enableZoom={false}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                />
              </Suspense>
            </Canvas>
            <div>
              <i>powered by </i>
              <strong>threesixtycubes</strong>
            </div>
          </div>
          <div className="config-subcont">
            <h2>Configuration Option</h2>
            <div className="config-catg-cont">
              <h3>Seat config option</h3>
              <div className="config-catg">
                <div>Texture 1</div>
                <div>Texture 2</div>
              </div>
              <div className="config-catg">
                <div>Color 1</div>
                <div>Color 2</div>
                <div>Color 3</div>
              </div>
            </div>
            <div className="config-catg-cont">
              <h3>Leg config option</h3>
              <div className="config-catg">
                <div>Texture 1</div>
                <div>Texture 2</div>
              </div>
              <div className="config-catg">
                <div>Color 1</div>
                <div>Color 2</div>
                <div>Color 3</div>
              </div>
            </div>
            <div className="config-catg-cont">
              <h3>Default presets</h3>
              <div className="config-catg">
                <div>Angle 1</div>
                <div>Angle 2</div>
                <div onClick={() => setAngel(10)}>Angle 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
