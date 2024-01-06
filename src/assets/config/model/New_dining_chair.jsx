import { useGLTF, useTexture } from '@react-three/drei'

import * as THREE from "three";

export default function DiningChair(props) {
  const { nodes } = useGLTF('https://customtechie.com/furniture/texture_n_model/new_dining_chair.gltf');

  const seatFrontProp1 = useTexture({
    aoMap:
      "src/assets/config/texture/dining_chair/fur/umonbbqdy_4K_AO.webp",
  });

  seatFrontProp1.aoMap.repeat.set(8,8);

  seatFrontProp1.aoMap.wrapS = seatFrontProp1.aoMap.wrapT = 
  THREE.RepeatWrapping;

  const seatBackProp1 = useTexture({
    aoMap:
      "src/assets/config/texture/dining_chair/leather/Leather_004_OCC.png",
  });

  seatBackProp1.aoMap.repeat.set(4,4);

  seatBackProp1.aoMap.wrapS = seatBackProp1.aoMap.wrapT = 
  THREE.RepeatWrapping;

  const legFrontProp1 = useTexture({
    map: "src/assets/config/texture/dining_chair/wood/Wood028_1K-JPG_Color.jpg",
    aoMap:
      "src/assets/config/texture/dining_chair/wood/Wood028_1K-JPG_Displacement.jpg",
  });

  legFrontProp1.map.repeat.set(4,4);
  legFrontProp1.aoMap.repeat.set(4,4);

  legFrontProp1.aoMap.wrapS = legFrontProp1.aoMap.wrapT = 
  THREE.RepeatWrapping;

  const legBackProp1 = useTexture({
    roughnessMap:
      "src/assets/config/texture/dining_chair/metal/Metal047A_1K-JPG_Roughness.jpg",
    aoMap:
      "src/assets/config/texture/dining_chair/metal/Metal047A_1K-JPG_Displacement.jpg",
  });

  legBackProp1.aoMap.repeat.set(4,4);

  legBackProp1.aoMap.wrapS = legBackProp1.aoMap.wrapT = 
  THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>

      {/* chair leg */}
      <group>
        <mesh geometry={nodes.SketchUp012.geometry}  rotation={[0, -0.781, 0]} scale={0.025} >
          <meshStandardMaterial {...legFrontProp1} />
        </mesh>
        <mesh geometry={nodes.SketchUp019.geometry}  rotation={[0, -0.781, 0]} scale={0.025} >
          <meshStandardMaterial {...legBackProp1} color={"#95745D"} />
        </mesh>
      </group>

      {/* front seat cushion */}
      <group>
        <mesh geometry={nodes.SketchUp021.geometry}  position={[0.002, -0.018, 0]} rotation={[-Math.PI, 0, 0]} scale={-0.025} >
          <meshStandardMaterial {...seatFrontProp1} color={"#E9CFBD"} />
        </mesh>
        <mesh geometry={nodes.SketchUp014.geometry}  position={[-0.005, -0.018, 0]} scale={0.025} >
          <meshStandardMaterial {...seatFrontProp1} color={"#E9CFBD"} />
        </mesh>
      </group>
      
      {/* seat and rims */}
      <group>
        <mesh geometry={nodes.SketchUp013.geometry}  position={[0, -0.018, 0]} scale={0.025}>
          <meshStandardMaterial {...seatFrontProp1} color={"#E9CFBD"} />
        </mesh>
        <mesh geometry={nodes.SketchUp016.geometry}  position={[0, -0.019, 0]} scale={0.025} >
          <meshStandardMaterial {...seatFrontProp1} color={"#E9CFBD"} />
        </mesh>
        <mesh geometry={nodes.SketchUp017.geometry}  position={[0, -0.106, 0]} scale={0.025} >
          <meshStandardMaterial {...seatFrontProp1} color={"#E9CFBD"} />
        </mesh>
      </group>

      {/* chair bottom tips */}
      <mesh geometry={nodes.SketchUp018.geometry} position={[0, 0.002, 0]} rotation={[0, -0.781, 0]} scale={0.025} >
        <meshStandardMaterial {...legBackProp1} color={"#000000"} />
      </mesh>

      {/* back seat cushion */}
      <group>
        <mesh geometry={nodes.SketchUp020.geometry}  position={[0, -0.018, 0]} scale={0.025} >
          <meshStandardMaterial {...seatBackProp1} color={"#95745D"} />
        </mesh>
        <mesh geometry={nodes.SketchUp015.geometry}  position={[0, -0.018, 0]} scale={0.025} >
        <meshStandardMaterial {...seatBackProp1} color={"#95745D"} />
        </mesh>
        <mesh geometry={nodes.SketchUp022.geometry}  position={[-0.003, -0.018, 0]} rotation={[-Math.PI, 0, 0]} scale={-0.025} >
        <meshStandardMaterial {...seatBackProp1} color={"#95745D"} />
        </mesh>
        <mesh geometry={nodes.SketchUp023.geometry}  position={[-0.003, -0.018, 0]} rotation={[-Math.PI, 0, 0]} scale={-0.025} >
        <meshStandardMaterial {...seatBackProp1} color={"#95745D"} />
        </mesh>
      </group>

    </group>
  )
}

useGLTF.preload('src/assets/config/model/new_dining_chair.gltf')
